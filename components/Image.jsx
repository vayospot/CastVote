import { useState } from "react";
import {
  Image as ExpoImage,
  ImageBackground as ExpoImageBackground,
} from "expo-image";

const DEFAULT_BLURHASH = "LBLEpKQ,9Fo#_NRORjD*00tR?aWV";

export default function Image({
  source,
  className,
  placeholder = { blurhash: DEFAULT_BLURHASH },
  transition = 400,
  preload = false,
  accessibilityLabel = "image",
  aspectVideo = true,
  ...props
}) {
  if (preload && source) {
    ExpoImage.prefetch(source);
  }

  return (
    <ExpoImage
      source={source || { uri: "https://via.placeholder.com/300" }}
      placeholder={placeholder}
      className={`w-full ${aspectVideo && "aspect-video"} ${className}`}
      transition={transition}
      accessibilityLabel={accessibilityLabel}
      {...props}
    />
  );
}

export function ImageBackground({
  children,
  source,
  className,
  placeholder = { blurhash: DEFAULT_BLURHASH },
  transition = 400,
  preload = false,
  aspectVideo = true,
  ...props
}) {
  const [loading, setLoading] = useState(true);
  if (preload && source) {
    ExpoImage.prefetch(source);
  }

  return (
    <ExpoImageBackground
      source={source || { uri: "https://via.placeholder.com/300" }}
      placeholder={placeholder}
      className={`w-full ${aspectVideo && "aspect-video"} ${className}`}
      transition={transition}
      onLoad={() => setLoading(false)}
      {...props}
    >
      {!loading && children}
    </ExpoImageBackground>
  );
}
