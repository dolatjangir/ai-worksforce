
'use client';

import React from 'react';
import { Zap, Loader2, Sparkles } from 'lucide-react';

import { useSEOAI } from '@/hooks/use-seo-ai';
import type { SEOPromptOutput } from '../../../lib/seo-prompt';

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

    // Build the generation context automatically.
    // No user-entered prompt is needed.
    const pageContent = [
      'Generate complete SEO metadata and JSON-LD schema.',
      `Page name: ${pageName.trim()}`,
      `Canonical URL: ${canonicalUrl.trim()}`,
      `Slug: ${slug.trim() || '/'}`,
      '',
      'Use these values to identify the target page.',
      'Use actual page content supplied by the server when available.',
      'Do not invent business claims, prices, statistics, FAQs, or image URLs.',
      'Generate an appropriate schema.org JSON-LD object for this page.',
      'Return valid, structured output for every supported SEO field.',
    ].join('\n');

    const result = await generate({
      pageName: pageName.trim(),
      canonicalUrl: canonicalUrl.trim(),
      pageContent,
    });

    if (result) {
      onGenerated(result);
    }
  };

  return (
    <div className="rounded-2xl border border-[var(--color-border-hover)] bg-gradient-to-br from-violet-50/50 to-[var(--color-badge-bg)] p-5 space-y-4">
      <div className="flex items-center gap-2">
        <Sparkles className="w-5 h-5 text-violet-600" />

        <h4 className="text-sm font-semibold text-[var(--color-text-primary)]">
          AI SEO Generator
        </h4>
      </div>

      <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-card-bg)] p-3 space-y-2">
        <div>
          <p className="text-xs text-[var(--color-text-muted)]">
            Selected page
          </p>
          <p className="text-sm font-medium text-[var(--color-text-primary)]">
            {pageName || 'Select a page'}
          </p>
        </div>

        <div>
          <p className="text-xs text-[var(--color-text-muted)]">
            Canonical URL
          </p>
          <p className="text-sm text-[var(--color-text-secondary)] break-all">
            {canonicalUrl || 'Select a canonical URL'}
          </p>
        </div>

        <div>
          <p className="text-xs text-[var(--color-text-muted)]">
            Slug
          </p>
          <p className="text-sm text-[var(--color-text-secondary)] break-all">
            {slug || '/'}
          </p>
        </div>
      </div>

      <p className="text-xs text-[var(--color-text-secondary)]">
        Automatically generates SEO titles, descriptions, keywords,
        social metadata, and structured data for the selected page.
      </p>

      {error && (
        <div className="text-xs text-red-600 bg-red-50 p-3 rounded-lg">
          {error}
        </div>
      )}

      <button
        type="button"
        onClick={handleGenerate}
        disabled={!isReady || isGenerating}
        className="w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-gradient-to-r from-[var(--color-primary)] to-violet-600 hover:from-violet-700 hover:to-[var(--color-primary-hover)] cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed text-white text-sm font-medium rounded-xl shadow-lg transition-all active:scale-95"
      >
        {isGenerating ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" />
            AI is generating SEO...
          </>
        ) : (
          <>
            <Zap className="w-4 h-4" />
            Generate SEO with AI
          </>
        )}
      </button>
    </div>
  );
}
