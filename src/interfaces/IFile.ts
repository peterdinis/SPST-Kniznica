
// Interface from filepond index.d.ts types
enum FileOrigin {
    INPUT = 1,
    LIMBO = 2,
    LOCAL = 3
}


enum FileStatus {
    INIT = 1,
    IDLE = 2,
    PROCESSING_QUEUED = 9,
    PROCESSING = 3,
    PROCESSING_COMPLETE = 5,
    PROCESSING_ERROR = 6,
    PROCESSING_REVERT_ERROR = 10,
    LOADING = 7,
    LOAD_ERROR = 8
}

type ActualFileObject = Blob & { readonly lastModified: number; readonly name: string; };

export interface FilePondFile {
  /** Returns the ID of the file. */
  id: string;
  /** Returns the server id of the file. */
  serverId: string;
  /** Returns the source of the file. */
  source: ActualFileObject | string;
  /** Returns the origin of the file. */
  origin: FileOrigin;
  /** Returns the current status of the file. */
  status: FileStatus;
  /** Returns the File object. */
  file: ActualFileObject;
  /** Returns the file extensions. */
  fileExtension: string;
  /** Returns the size of the file. */
  fileSize: number;
  /** Returns the type of the file. */
  fileType: string;
  /** Returns the full name of the file. */
  filename: string;
  /** Returns the name of the file without extension. */
  filenameWithoutExtension: string;

  /** Aborts loading of this file */
  abortLoad: () => void;
  /** Aborts processing of this file */
  abortProcessing: () => void;
  /**
   * Retrieve metadata saved to the file, pass a key to retrieve
   * a specific part of the metadata (e.g. 'crop' or 'resize').
   * If no key is passed, the entire metadata object is returned.
   */
  getMetadata: (key?: string) => any;
  /** Add additional metadata to the file */
  setMetadata: (key: string, value: any, silent?: boolean) => void;
}
