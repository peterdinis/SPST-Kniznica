import { useState } from 'react';
import {toast} from "react-toastify";

type CopiedValue = string | null
type CopyFn = (text: string) => Promise<boolean>

function useCopyToClipboard(): [CopiedValue, CopyFn] {
  const [copiedText, setCopiedText] = useState<CopiedValue>(null)
  const copySuccess = () => toast.success("Hodnota bola skopirovaná");
  const copyFail = () => toast.error("Chyba pri kopirovaní");

  const copy: CopyFn = async text => {
    if (!navigator?.clipboard) {
      console.warn('Clipboard not supported')
      return false
    }

    try {
      await navigator.clipboard.writeText(text)
      copySuccess();
      setCopiedText(text)
      return true
    } catch (error) {
      console.warn('Copy failed', error)
      copyFail();
      setCopiedText(null)
      return false
    }
  }

  return [copiedText, copy]
}

export default useCopyToClipboard