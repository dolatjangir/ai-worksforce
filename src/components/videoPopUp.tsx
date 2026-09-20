"use client";

import { useEffect, useId, useRef, useState, type ReactNode } from "react";

export type VideoPopupProps = {
  /** Direct video delivery URL, not a Cloudinary dashboard or player page. */
  src: string;
  title?: string;
  poster?: string;
  children?: ReactNode;
  className?: string;
};

export default function VideoPopup({
  src,
  title = "See How It Works",
  poster,
  children = "See How It Works",
  className,
}: VideoPopupProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const backdropPress = useRef(false);
  const [isOpen, setIsOpen] = useState(false);
  const [hasError, setHasError] = useState(false);
  const id = useId();

  useEffect(() => {
    if (!isOpen) return;
    const dialog = dialogRef.current;
    if (!dialog) return;
    const previousOverflow = document.documentElement.style.overflow;
    dialog.showModal();
    document.documentElement.style.overflow = "hidden";
    return () => {
      dialog.close();
      document.documentElement.style.overflow = previousOverflow;
    };
  }, [isOpen]);

  function close() {
    videoRef.current?.pause();
    dialogRef.current?.close();
    setIsOpen(false);
    triggerRef.current?.focus({ preventScroll: true });
  }

  return (
    <>
      <button
        ref={triggerRef}
        type="button"
        aria-haspopup="dialog"
        aria-controls={id}
        aria-expanded={isOpen}
        className={className}
        onClick={() => {
          setHasError(false);
          setIsOpen(true);
        }}
      >
        {children}
      </button>

      <dialog
        ref={dialogRef}
        id={id}
        aria-labelledby={`${id}-title`}
        className="fixed inset-0 m-auto max-h-[calc(100dvh-2rem)] w-[calc(100%-2rem)] max-w-5xl overflow-y-auto rounded-2xl border border-white/15 bg-brand-navy p-0 text-white shadow-2xl backdrop:bg-black/75 backdrop:backdrop-blur-sm"
        onCancel={(event) => {
          event.preventDefault();
          close();
        }}
        onClose={() => {
          videoRef.current?.pause();
          setIsOpen(false);
        }}
        onPointerDown={(event) => {
          backdropPress.current = event.target === event.currentTarget;
        }}
        onClick={(event) => {
          if (backdropPress.current && event.target === event.currentTarget) close();
          backdropPress.current = false;
        }}
      >
        <div>
          <div className="flex items-center justify-between gap-4 px-4 py-3 sm:px-6">
            <h2 id={`${id}-title`} className="text-base font-semibold sm:text-lg">
              {title}
            </h2>
            <button
              type="button"
              autoFocus
              onClick={close}
              aria-label="Close video"
              className="inline-flex size-11 shrink-0 items-center justify-center rounded-full bg-white/10 text-2xl hover:bg-white/20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              <span aria-hidden="true">×</span>
            </button>
          </div>
          {isOpen && (
            <video
              ref={videoRef}
              key={src}
              src={src}
              poster={poster}
              controls
              autoPlay
              playsInline
              preload="metadata"
              aria-label={title}
              onError={() => setHasError(true)}
              className="block aspect-video max-h-[calc(100dvh-8rem)] w-full bg-black object-contain"
            >
              Your browser does not support HTML video.
            </video>
          )}
          {hasError && (
            <p role="alert" className="px-4 py-3 text-sm sm:px-6">
              The video could not be loaded. Please try again later.
            </p>
          )}
        </div>
      </dialog>
    </>
  );
}
