"use client";

import React from "react";
import { Zap, Loader2 } from "lucide-react";

import { useSEOAI } from "@/hooks/use-seo-ai";
import type {
  SEOPromptOutput,
} from "../../../lib/seo-prompt";

interface AIGeneratePanelProps {
  pageName: string;
  canonicalUrl: string;
  slug: string;
  onGenerated: (data: SEOPromptOutput) => void;
}

export default function AIGeneratePanel({
  pageName,
  canonicalUrl,
  slug,
  onGenerated,
}: AIGeneratePanelProps) {
  const { generate, isGenerating, error } = useSEOAI();

  const isReady =
    pageName.trim().length > 0 &&
    canonicalUrl.trim().length > 0;

  const handleGenerate = async () => {
    if (!isReady || isGenerating) return;

    const result = await generate({
      pageName: pageName.trim(),
      canonicalUrl: canonicalUrl.trim(),
      // The API retrieves the actual page content.
      pageContent: "",
    });

    if (result) {
      onGenerated(result);
    }
  };

  return (
    <div className="flex flex-col items-end gap-1">
      <button
        type="button"
        onClick={handleGenerate}
        disabled={!isReady || isGenerating}
        title={
          !isReady
            ? "Select a canonical URL first"
            : `Generate SEO for ${slug || pageName}`
        }
        className="
          inline-flex items-center justify-center gap-2
          rounded-xl px-3 sm:px-4 py-2
          bg-[var(--color-primary)]
          hover:bg-[var(--color-primary-hover)]
          text-white text-sm font-medium
          disabled:opacity-40 disabled:cursor-not-allowed
          transition-all active:scale-95 whitespace-nowrap
        "
      >
        {isGenerating ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" />
            <span>Generating...</span>
          </>
        ) : (
          <>
            <Zap className="w-4 h-4" />
            <span className="hidden sm:inline">
              Generate SEO with AI
            </span>
            <span className="sm:hidden">
              Generate
            </span>
          </>
        )}
      </button>

      {error && (
        <p
          role="alert"
          className="max-w-60 text-xs text-red-600"
        >
          {error}
        </p>
      )}
    </div>
  );
}