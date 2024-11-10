import {
  Image as ExpoImage,
  ImageBackground as ExpoImageBackground,
} from "expo-image";

const DEFAULT_BLURHASH =
  "|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[";

export default function Image({
  source,
  className,
  placeholder = { blurhash: DEFAULT_BLURHASH },
  transition = 500,
  preload = false,
  accessibilityLabel = "image",
  ...props
}) {
  if (preload && source) {
    ExpoImage.prefetch(source);
  }

  return (
    <ExpoImage
      source={source || { uri: "https://via.placeholder.com/300" }}
      placeholder={placeholder}
      className={`aspect-video w-full ${className}`}
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
  transition = 500,
  preload = false,
  ...props
}) {
  if (preload && source) {
    ExpoImage.prefetch(source);
  }

  return (
    <ExpoImageBackground
      source={source || { uri: "https://via.placeholder.com/300" }}
      placeholder={placeholder}
      className={`aspect-video w-full ${className}`}
      transition={transition}
      {...props}
    >
      {children}
    </ExpoImageBackground>
  );
}
