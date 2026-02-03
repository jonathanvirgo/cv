import axios, { AxiosInstance } from 'axios'
import FormData from 'form-data'
import { InputError, NotFoundError } from '@/utils/ApiError'

interface MPSConfig {
  baseUrl: string
  namespace: string
  authToken: string
}

interface FileInfo {
  content_type: string
  path: string
  size: number
  upload_time: string
}

interface UploadResponse {
  data: {
    'content-type': string
    convert_time?: number
    path: string
    size: number
    upload_time: string
  }
  description: string
  status: boolean
  status_code: string
}

interface DirectoryItem {
  directories: string[]
  files: any[]
  page?: number
  total_items: number
}

interface CheckPathResponse {
  exists: boolean
  suggest_path?: string
}

class MPSFileService {
  private static instance: MPSFileService
  private axiosInstance: AxiosInstance
  private namespace: string
  private authToken: string
  private baseUrl: string

  private constructor(config: MPSConfig) {
    this.namespace = config.namespace
    this.authToken = config.authToken
    this.baseUrl = config.baseUrl
    
    this.axiosInstance = axios.create({
      baseURL: config.baseUrl,
      headers: {
        'Cookie': 'SRVNAME=svr1'
      }
    })
  }

  // Singleton pattern - chỉ khởi tạo 1 lần
  public static getInstance(config?: MPSConfig): MPSFileService {
    if (!MPSFileService.instance) {
      if (!config) {
        throw new Error('Config is required for first initialization')
      }
      MPSFileService.instance = new MPSFileService(config)
    }
    return MPSFileService.instance
  }

  // Reset instance nếu cần thay đổi config
  public static resetInstance(): void {
    MPSFileService.instance = null as any
  }

  /**
   * Lấy thông tin namespace
   */
  async getNamespaceInfo(): Promise<any> {
    try {
      const response = await this.axiosInstance.get(
        `/v1/namespaces/${this.namespace}/info`,
        {
          headers: {
            'X-Namespace-Authen': this.authToken
          }
        }
      )
      return response.data
    } catch (error: any) {
      console.error('Get namespace info error:', error.response?.data)
      throw new Error(`Failed to get namespace info: ${error.response?.data?.description || error.message}`)
    }
  }

  /**
   * Upload file mới
   */
  async uploadFile(
    path: string,
    fileData?: Buffer,
    options?: {
      source?: string
      overwrite?: boolean
      keep_image_exif?: boolean
      incoming_transformations?: any[]
      eager_transformations?: any[]
      eager_async_transformations?: any[]
      drm?: string
      contentType?: string
      filename?: string
    }
  ): Promise<UploadResponse> {
    try {
      const formData = new FormData()
      
      if (options?.source) {
        // Upload từ URL
        formData.append('source', options.source)
      } else if (fileData) {
        // Upload file với key 'filedata' như yêu cầu trong docs
        // QUAN TRỌNG: Phải dùng Blob hoặc truyền trực tiếp Buffer với metadata
        const filename = options?.filename || path.split('/').pop() || 'file'
        
        // Append file data với đầy đủ metadata
        formData.append('filedata', fileData, {
          filename: filename,
          // contentType: contentType,
          knownLength: fileData.length
        })
      }
      
      // Các tham số khác
      if (options?.overwrite !== undefined) {
        formData.append('overwrite', options.overwrite ? '1' : '0')
      }
      
      if (options?.keep_image_exif !== undefined) {
        formData.append('keep_image_exif', options.keep_image_exif ? 'true' : 'false')
      }
      
      if (options?.incoming_transformations && options.incoming_transformations.length > 0) {
        formData.append('incoming_transformations', JSON.stringify(options.incoming_transformations))
      }
      
      if (options?.eager_transformations && options.eager_transformations.length > 0) {
        formData.append('eager_transformations', JSON.stringify(options.eager_transformations))
      }
      
      if (options?.eager_async_transformations && options.eager_async_transformations.length > 0) {
        formData.append('eager_async_transformations', JSON.stringify(options.eager_async_transformations))
      }
      
      if (options?.drm) {
        formData.append('drm', options.drm)
      }

      // Log để debug
      console.log('Uploading to MPS:', {
        url: `/v1/namespaces/${this.namespace}/files/${path}`,
        filename: options?.filename,
        contentType: options?.contentType,
        bufferLength: fileData?.length,
        hasSource: !!options?.source
      })

      const response = await this.axiosInstance.post(
        `/v1/namespaces/${this.namespace}/files/${path}`,
        formData,
        {
          headers: {
            ...formData.getHeaders(),
            'X-Namespace-Authen': this.authToken
          },
          maxBodyLength: Infinity,
          maxContentLength: Infinity,
          timeout: 300000 // 5 phút timeout
        }
      )
      
      console.log('Upload response:', response.data)
      return response.data
    } catch (error: any) {
      // Log chi tiết lỗi để debug
      console.error('Upload file error:', {
        message: error.message,
        response: error.response?.data,
        status: error.response?.status,
        statusText: error.response?.statusText
      })
      
      const errorMessage = error.response?.data?.description 
        || error.response?.data?.message 
        || error.message
      
      throw new Error(`Failed to upload file: ${errorMessage}`)
    }
  }

  /**
   * Lấy thông tin file
   */
  async getFileInfo(path: string): Promise<FileInfo> {
    try {
      const response = await this.axiosInstance.get(
        `/v1/namespaces/${this.namespace}/files/${path}`,
        {
          headers: {
            'X-Namespace-Authen': this.authToken
          }
        }
      )
      
      if (!response.data.status) {
        throw new NotFoundError(`File ${path} không tồn tại`, '', 1)
      }
      
      return response.data.data
    } catch (error: any) {
      console.error('Get file info error:', error.response?.data)
      throw new Error(`Failed to get file info: ${error.response?.data?.description || error.message}`)
    }
  }

  /**
   * Xóa file
   */
  async deleteFile(path: string): Promise<any> {
    try {
      const response = await this.axiosInstance.delete(
        `/v1/namespaces/${this.namespace}/files/${path}`,
        {
          headers: {
            'X-Namespace-Authen': this.authToken
          }
        }
      )
      return response.data
    } catch (error: any) {
      console.error('Delete file error:', error.response?.data)
      throw new Error(`Failed to delete file: ${error.response?.data?.description || error.message}`)
    }
  }

  /**
   * Sao chép file
   */
  async copyFile(sourcePath: string, destPath: string): Promise<any> {
    try {
      const response = await this.axiosInstance.post(
        `/v1/namespaces/${this.namespace}/copy-file`,
        null,
        {
          headers: {
            'X-Namespace-Authen': this.authToken,
            'source-path': sourcePath,
            'dest-path': destPath
          }
        }
      )
      return response.data
    } catch (error: any) {
      console.error('Copy file error:', error.response?.data)
      throw new Error(`Failed to copy file: ${error.response?.data?.description || error.message}`)
    }
  }

  /**
   * Đổi tên file
   */
  async renameFile(path: string, newName: string): Promise<any> {
    try {
      const response = await this.axiosInstance.post(
        `/v1/namespaces/${this.namespace}/rename-file`,
        null,
        {
          params: {
            "path": path,
            'new-name': newName
          },
          headers: {
            'X-Namespace-Authen': this.authToken
          }
        }
      )
      return response.data
    } catch (error: any) {
      console.error('Rename file error:', error.response?.data)
      throw new Error(`Failed to rename file: ${error.response?.data?.description || error.message}`)
    }
  }

  /**
   * Kiểm tra path tồn tại https://mps.mediacdn.vn/v1/namespaces/{namespace}/is-exists/{path}
   */
  async checkPath(path: string, type: 'file' | 'dir'): Promise<CheckPathResponse> {
    try {
      const response = await this.axiosInstance.get(
        `/v1/namespaces/${this.namespace}/is-exists/${path}`,
        {
          params: { type },
          headers: {
            'X-Namespace-Authen': this.authToken
          }
        }
      )
      return response.data.data
    } catch (error: any) {
      console.error('Check path error:', error.response?.data)
      throw new Error(`Failed to check path: ${error.response?.data?.description || error.message}`)
    }
  }

  /**
   * Edit cache (precache hoặc purgecache) https://mps.mediacdn.vn/v1/namespaces/{namespace}/editcache_cdn/{path}
   */
  async editCache(path: string, action: 'precache' | 'purgecache', taskid?: string): Promise<any> {
    try {
      const response = await this.axiosInstance.post(
        `/v1/namespaces/${this.namespace}/editcache_cdn/${path}`,
        null,
        {
          params: {
            action,
            ...(taskid && { taskid })
          },
          headers: {
            'X-Namespace-Authen': this.authToken
          }
        }
      )
      return response.data
    } catch (error: any) {
      console.error('Edit cache error:', error.response?.data)
      throw new Error(`Failed to edit cache: ${error.response?.data?.description || error.message}`)
    }
  }

  /**
   * Tạo thư mục mới
   */
  async createDirectory(path: string): Promise<any> {
    try {
      const response = await this.axiosInstance.post(
        `/v1/namespaces/${this.namespace}/directories`,
        null,
        {
          params: { path },
          headers: {
            'X-Namespace-Authen': this.authToken
          }
        }
      )
      return response.data
    } catch (error: any) {
      console.error('Create directory error:', error.response?.data)
      throw new Error(`Failed to create directory: ${error.response?.data?.description || error.message}`)
    }
  }

  /**
   * Xóa thư mục rỗng
   */
  async deleteDirectory(path: string): Promise<any> {
    try {
      const response = await this.axiosInstance.delete(
        `/v1/namespaces/${this.namespace}/directories`,
        {
          params: { path },
          headers: {
            'X-Namespace-Authen': this.authToken
          }
        }
      )
      return response.data
    } catch (error: any) {
      console.error('Delete directory error:', error.response?.data)
      throw new Error(`Failed to delete directory: ${error.response?.data?.description || error.message}`)
    }
  }

  /**
   * Lấy danh sách file/folder trong thư mục
   */
  async listDirectory(
    path: string,
    options?: {
      type?: 'file' | 'dir'
      page?: number
      page_size?: number
      marker?: string
      include_item_info?: boolean
    }
  ): Promise<DirectoryItem> {
    try {
      const response = await this.axiosInstance.get(
        `/v1/namespaces/${this.namespace}/directories`,
        {
          params: {
            path,
            ...options
          },
          headers: {
            'X-Namespace-Authen': this.authToken
          }
        }
      )
      return response.data.data
    } catch (error: any) {
      console.error('List directory error:', error.response?.data)
      throw new Error(`Failed to list directory: ${error.response?.data?.description || error.message}`)
    }
  }

  /**
   * Khởi tạo phiên upload multipart https://mps.mediacdn.vn/v1/namespaces/{namespace}/multiparts/{path}
   */
  async initMultipartUpload(
    path: string,
    contentType?: string,
    overwrite?: boolean
  ): Promise<{ path: string; upload_id: string }> {
    try {
      const response = await this.axiosInstance.post(
        `/v1/namespaces/${this.namespace}/multiparts/${path}`,
        null,
        {
          params: {
            ...(overwrite !== undefined && { overwrite: overwrite ? 1 : 0 })
          },
          headers: {
            ...(contentType && { 'X-Content-Type': contentType }),
            'X-Namespace-Authen': this.authToken
          }
        }
      )
      return response.data.data
    } catch (error: any) {
      console.error('Init multipart upload error:', {
        message: error.message,
        response: error.response?.data,
        status: error.response?.status
      })
      throw new Error(`Failed to init multipart upload: ${error.response?.data?.description || error.message}`)
    }
  }

  /**
   * Upload một part https://mps.mediacdn.vn/v1/namespaces/{namespace}/multiparts/{path}
   */
  async uploadPart(
    path: string,
    uploadId: string,
    partNumber: number,
    data: Buffer
  ): Promise<any> {
    try {
      const response = await this.axiosInstance.put(
        `/v1/namespaces/${this.namespace}/multiparts/${path}`,
        data,
        {
          params: {
            upload_id: uploadId,
            part_number: partNumber
          },
          headers: {
            'X-Namespace-Authen': this.authToken,
            'Content-Type': 'application/octet-stream'
          }
        }
      )
      return response.data.data
    } catch (error: any) {
      console.error('Upload part error:', {
        message: error.message,
        response: error.response?.data,
        status: error.response?.status
      })
      throw new Error(`Failed to upload part: ${error.response?.data?.description || error.message}`)
    }
  }

  /**
   * Hoàn thành phiên upload multipart
   */
  async completeMultipartUpload(path: string, uploadId: string): Promise<any> {
    try {
      const response = await this.axiosInstance.post(
        `/v1/namespaces/${this.namespace}/multiparts/${path}`,
        null,
        {
          params: { upload_id: uploadId },
          headers: {
            'X-Namespace-Authen': this.authToken
          }
        }
      )
      return response.data
    } catch (error: any) {
      console.error('Complete multipart upload error:', {
        message: error.message,
        response: error.response?.data,
        status: error.response?.status
      })
      throw new Error(`Failed to complete multipart upload: ${error.response?.data?.description || error.message}`)
    }
  }

  /**
   * Hủy phiên upload multipart
   */
  async abortMultipartUpload(path: string, uploadId: string): Promise<any> {
    try {
      const response = await this.axiosInstance.delete(
        `/v1/namespaces/${this.namespace}/multiparts/${path}`,
        {
          params: { upload_id: uploadId },
          headers: {
            'X-Namespace-Authen': this.authToken
          }
        }
      )
      return response.data
    } catch (error: any) {
      console.error('Abort multipart upload error:', {
        message: error.message,
        response: error.response?.data,
        status: error.response?.status
      })
      throw new Error(`Failed to abort multipart upload: ${error.response?.data?.description || error.message}`)
    }
  }

  /**
   * Lấy thông tin phiên upload
   */
  async getUploadInfo(path: string, uploadId: string): Promise<any> {
    try {
      const response = await this.axiosInstance.get(
        `/v1/namespaces/${this.namespace}/multiparts/${path}`,
        {
          params: { upload_id: uploadId },
          headers: {
            'X-Namespace-Authen': this.authToken
          }
        }
      )
      return response.data.data
    } catch (error: any) {
      console.error('Get upload info error:', {
        message: error.message,
        response: error.response?.data,
        status: error.response?.status
      })
      throw new Error(`Failed to get upload info: ${error.response?.data?.description || error.message}`)
    }
  }

  /**
   * Lấy danh sách permissions
   */
  async getPermissions(): Promise<string[]> {
    try {
      const response = await this.axiosInstance.get(
        `/v1/namespaces/${this.namespace}/permissions`,
        {
          headers: {
            'X-Namespace-Authen': this.authToken
          }
        }
      )
      return response.data.data.permissions
    } catch (error: any) {
      console.error('Get permissions error:', error.response?.data)
      throw new Error(`Failed to get permissions: ${error.response?.data?.description || error.message}`)
    }
  }

  /**
   * Thêm permissions
   */
  async addPermissions(permissions: string[]): Promise<any> {
    try {
      const response = await this.axiosInstance.put(
        `/v1/namespaces/${this.namespace}/permissions/${permissions.join(',')}`,
        null,
        {
          headers: {
            'X-Namespace-Authen': this.authToken
          }
        }
      )
      return response.data
    } catch (error: any) {
      console.error('Add permissions error:', error.response?.data)
      throw new Error(`Failed to add permissions: ${error.response?.data?.description || error.message}`)
    }
  }

  /**
   * Xóa permissions
   */
  async deletePermissions(permissions: string[]): Promise<any> {
    try {
      const response = await this.axiosInstance.delete(
        `/v1/namespaces/${this.namespace}/permissions/${permissions.join(',')}`,
        {
          headers: {
            'X-Namespace-Authen': this.authToken
          }
        }
      )
      return response.data
    } catch (error: any) {
      console.error('Delete permissions error:', error.response?.data)
      throw new Error(`Failed to delete permissions: ${error.response?.data?.description || error.message}`)
    }
  }

  /**
   * Lấy trạng thái giải nén
   */
  async getUnarchiveStatus(statusKey: string): Promise<any> {
    try {
      const response = await this.axiosInstance.get(
        `/v1/namespaces/${this.namespace}/unarchiver/${statusKey}`,
        {
          headers: {
            'X-Namespace-Authen': this.authToken
          }
        }
      )
      return response.data.data
    } catch (error: any) {
      console.error('Get unarchive status error:', error.response?.data)
      throw new Error(`Failed to get unarchive status: ${error.response?.data?.description || error.message}`)
    }
  }

  /**
   * Upload file to local IP
   */
  async uploadLocalIp(
    remoteFilename: string,
    fileData: Buffer,
    options?: {
      overwrite?: boolean
      keep_image_exif?: boolean
      incoming_transformations?: any[]
      eager_transformations?: any[]
      eager_async_transformations?: any[]
      drm?: string
    }
  ): Promise<any> {
    try {
      const formData = new FormData()
      formData.append('filename', remoteFilename)
      formData.append('secret_key', this.authToken)
      formData.append('filedata', fileData, {
        filename: remoteFilename,
        knownLength: fileData.length
      })

      if(options.overwrite){
        formData.append('overwrite', '1')
      }

      const response = await axios.post(
        'http://192.168.6.196/_/upload',
        formData,
        {
          headers: {
            ...formData.getHeaders()
          },
          maxBodyLength: Infinity,
          maxContentLength: Infinity,
          timeout: 300000 // 5 phút timeout
        }
      )

      console.log('Upload local response:', response.data)
      return response.data
    } catch (error: any) {
      console.error('Upload local file error:', {
        message: error.message,
        response: error.response?.data,
        status: error.response?.status
      })
      const errorMessage = error.response?.data?.description || error.response?.data?.message || error.message
      throw new Error(`Failed to upload local file: ${errorMessage}`)
    }
  }
}

// Export các hàm helper để gọi trực tiếp
const getMPSService = () => MPSFileService.getInstance()

export const mpsFileService = {
  // Khởi tạo service (gọi 1 lần duy nhất khi app start)
  init: (config: MPSConfig) => {
    MPSFileService.getInstance(config)
  },
  
  // Reset instance nếu cần
  reset: () => {
    MPSFileService.resetInstance()
  },

  // Các hàm helper để gọi trực tiếp
  getNamespaceInfo: () => getMPSService().getNamespaceInfo(),
  
  uploadFile: (path: string, fileData?: Buffer, options?: any) => 
    getMPSService().uploadFile(path, fileData, options),
  
  getFileInfo: (path: string) => getMPSService().getFileInfo(path),
  
  deleteFile: (path: string) => getMPSService().deleteFile(path),
  
  copyFile: (sourcePath: string, destPath: string) => 
    getMPSService().copyFile(sourcePath, destPath),
  
  renameFile: (path: string, newName: string) => 
    getMPSService().renameFile(path, newName),
  
  checkPath: (path: string, type: 'file' | 'dir') => 
    getMPSService().checkPath(path, type),
  
  editCache: (path: string, action: 'precache' | 'purgecache', taskid?: string) => 
    getMPSService().editCache(path, action, taskid),
  
  createDirectory: (path: string) => getMPSService().createDirectory(path),
  
  deleteDirectory: (path: string) => getMPSService().deleteDirectory(path),
  
  listDirectory: (path: string, options?: any) => 
    getMPSService().listDirectory(path, options),
  
  initMultipartUpload: (path: string, contentType?: string, overwrite?: boolean) => 
    getMPSService().initMultipartUpload(path, contentType, overwrite),
  
  uploadPart: (path: string, uploadId: string, partNumber: number, data: Buffer) => 
    getMPSService().uploadPart(path, uploadId, partNumber, data),
  
  completeMultipartUpload: (path: string, uploadId: string) => 
    getMPSService().completeMultipartUpload(path, uploadId),
  
  abortMultipartUpload: (path: string, uploadId: string) => 
    getMPSService().abortMultipartUpload(path, uploadId),
  
  getUploadInfo: (path: string, uploadId: string) => 
    getMPSService().getUploadInfo(path, uploadId),
  
  getPermissions: () => getMPSService().getPermissions(),
  
  addPermissions: (permissions: string[]) => 
    getMPSService().addPermissions(permissions),
  
  deletePermissions: (permissions: string[]) => 
    getMPSService().deletePermissions(permissions),
  
  getUnarchiveStatus: (statusKey: string) => 
    getMPSService().getUnarchiveStatus(statusKey),
    
  uploadLocalIp: (remoteFilename: string, fileData: Buffer, options: any) =>
    getMPSService().uploadLocalIp(remoteFilename, fileData, options)
}

export default mpsFileService
