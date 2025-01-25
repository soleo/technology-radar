
import type {
    ContentSourceInterface,
    Version,
    getVersion,
  } from '@stackbit/types'
import path from 'path'

export interface ContentSourceOptions {
    projectId: string
}

export class CustomContentSource implements ContentSourceInterface {
    private readonly projectId: string

    constructor(options) {
      this.projectId = options.projectId
    }

  getContentSourceType(): string {
    return 'custom_content_source'
  }
  getProjectId(): string {
    return this.projectId
  }
}