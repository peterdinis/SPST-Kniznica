import { CopiedValue, CopyFn } from "@/interfaces/IHooks";
import { useState } from "react";
import {toast} from "react-toastify";

function useCopyToClipboard(): [CopiedValue, CopyFn] {
  const [copiedText, setCopiedText] = useState<CopiedValue>(null);

  const copiedValue = () =>toast.success("Skopirované");

  const copy: CopyFn = async (text) => {
    if (!navigator?.clipboard) {
      console.warn("Clipboard not supported");
      return false;
    }

    try {
      await navigator.clipboard.writeText(text);
      copiedValue();
      setCopiedText(text);
      return true;
    } catch (error) {
      console.warn("Copy failed", error);
      setCopiedText(null);
      return false;
    }
  };

  return [copiedText, copy];
}

export default useCopyToClipboard;
