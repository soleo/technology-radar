
import type {
    Asset,
    ContentChanges,
    ContentEngineConfig,
    ContentSourceInterface,
    Document,
    DocumentVersion,
    DocumentVersionWithDocument,
    InitOptions,
    Model,
    ScheduledAction,
    ScheduledActionActionType,
    Schema,
    UpdateOperation,
    UpdateOperationField,
    UserSSOProfile,
    ValidationError,
    Version
  } from '@stackbit/types'

export interface ContentSourceOptions {
    projectId: string
}

export class CustomContentSource implements ContentSourceInterface {
    private readonly projectId: string

    constructor(options: { projectId: string }) {
      this.projectId = options.projectId
    }
    getVersion(): Promise<Version> {
        throw new Error('Method not implemented.')
    }
    getProjectEnvironment(): string {
        throw new Error('Method not implemented.')
    }
    getProjectManageUrl(): string {
        throw new Error('Method not implemented.')
    }
    init(options: InitOptions<unknown, unknown, unknown, unknown>): Promise<void> {
        throw new Error('Method not implemented.')
    }
    reset(): Promise<void> {
        throw new Error('Method not implemented.')
    }
    destroy(): Promise<void> {
        throw new Error('Method not implemented.')
    }
    onWebhook?(data: { data: unknown; headers: Record<string, string> }): void {
        throw new Error('Method not implemented.')
    }
    onFilesChange?({ updatedFiles }: { updatedFiles: string[] }): Promise<{ invalidateSchema?: boolean; contentChanges?: ContentChanges<unknown, unknown> | undefined }> {
        throw new Error('Method not implemented.')
    }
    startWatchingContentUpdates?(): void {
        throw new Error('Method not implemented.')
    }
    stopWatchingContentUpdates?(): void {
        throw new Error('Method not implemented.')
    }
    getSchema(): Promise<Schema<unknown, unknown>> {
        throw new Error('Method not implemented.')
    }
    getDocuments(options?: { syncContext?: unknown }): Promise<Document<unknown>[] | { documents: Document<unknown>[]; syncContext?: unknown }> {
        throw new Error('Method not implemented.')
    }
    getAssets(options?: { syncContext?: unknown }): Promise<Asset<unknown>[] | { assets: Asset<unknown>[]; syncContext?: unknown }> {
        throw new Error('Method not implemented.')
    }
    hasAccess(options: { userContext?: { name: string; email: string; role?: string; sso?: UserSSOProfile } | undefined }): Promise<{ hasConnection: boolean; hasPermissions: boolean }> {
        throw new Error('Method not implemented.')
    }
    createDocument(options: { updateOperationFields: Record<string, UpdateOperationField>; model: Model<unknown>; locale?: string; defaultLocaleDocumentId?: string; userContext?: { name: string; email: string; role?: string; sso?: UserSSOProfile } | undefined }): Promise<{ documentId: string }> {
        throw new Error('Method not implemented.')
    }
    updateDocument(options: { document: Document<unknown>; operations: UpdateOperation[]; userContext?: { name: string; email: string; role?: string; sso?: UserSSOProfile } | undefined }): Promise<void> {
        throw new Error('Method not implemented.')
    }
    deleteDocument(options: { document: Document<unknown>; userContext?: { name: string; email: string; role?: string; sso?: UserSSOProfile } | undefined }): Promise<void> {
        throw new Error('Method not implemented.')
    }
    archiveDocument?(options: { document: Document<unknown>; userContext?: { name: string; email: string; role?: string; sso?: UserSSOProfile } | undefined }): Promise<void> {
        throw new Error('Method not implemented.')
    }
    unarchiveDocument?(options: { document: Document<unknown>; userContext?: { name: string; email: string; role?: string; sso?: UserSSOProfile } | undefined }): Promise<void> {
        throw new Error('Method not implemented.')
    }
    getScheduledActions?(): Promise<ScheduledAction[]> {
        throw new Error('Method not implemented.')
    }
    createScheduledAction?(options: { name: string; action: ScheduledActionActionType; documentIds: string[]; executeAt: string; userContext?: { name: string; email: string; role?: string; sso?: UserSSOProfile } | undefined }): Promise<{ newScheduledActionId: string }> {
        throw new Error('Method not implemented.')
    }
    cancelScheduledAction?(options: { scheduledActionId: string; userContext?: { name: string; email: string; role?: string; sso?: UserSSOProfile } | undefined }): Promise<{ cancelledScheduledActionId: string }> {
        throw new Error('Method not implemented.')
    }
    updateScheduledAction?(options: { scheduledActionId: string; name?: string; documentIds?: string[]; executeAt?: string; userContext?: { name: string; email: string; role?: string; sso?: UserSSOProfile } | undefined }): Promise<{ updatedScheduledActionId: string }> {
        throw new Error('Method not implemented.')
    }
    uploadAsset(options: { url?: string; base64?: string; fileName: string; mimeType: string; locale?: string; userContext?: { name: string; email: string; role?: string; sso?: UserSSOProfile } | undefined }): Promise<Asset<unknown>> {
        throw new Error('Method not implemented.')
    }
    updateAsset?(options: { asset: Asset<unknown>; operations: UpdateOperation[]; userContext?: { name: string; email: string; role?: string; sso?: UserSSOProfile } | undefined }): Promise<void> {
        throw new Error('Method not implemented.')
    }
    validateDocuments(options: { documents: Document<unknown>[]; assets: Asset<unknown>[]; locale?: string; userContext?: { name: string; email: string; role?: string; sso?: UserSSOProfile } | undefined }): Promise<{ errors: ValidationError[] }> {
        throw new Error('Method not implemented.')
    }
    publishDocuments(options: { documents: Document<unknown>[]; assets: Asset<unknown>[]; userContext?: { name: string; email: string; role?: string; sso?: UserSSOProfile } | undefined }): Promise<void> {
        throw new Error('Method not implemented.')
    }
    unpublishDocuments?(options: { documents: Document<unknown>[]; assets: Asset<unknown>[]; userContext?: { name: string; email: string; role?: string; sso?: UserSSOProfile } | undefined }): Promise<void> {
        throw new Error('Method not implemented.')
    }
    getContentEngineConfig?(): ContentEngineConfig {
        throw new Error('Method not implemented.')
    }
    getDocumentVersions?(options: { documentId: string }): Promise<{ versions: DocumentVersion[] }> {
        throw new Error('Method not implemented.')
    }
    getDocumentForVersion?(options: { documentId: string; versionId: string }): Promise<{ version: DocumentVersionWithDocument }> {
        throw new Error('Method not implemented.')
    }

    getContentSourceType(): string {
        return 'custom_content_source'
    }
    getProjectId(): string {
        return this.projectId
    }
}