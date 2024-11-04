import {
  Children,
  forwardRef,
  useImperativeHandle,
  useMemo,
  useRef,
  useState,
} from "react";
import { Animated, Dimensions, View } from "react-native";

const { width: screenWidth } = Dimensions.get("window");

/**
 * Swiper component to create a horizontal scrollable view with pagination dots.
 *
 * @param {ReactNode[]} props.children - The content (slides) of the Swiper.
 * @param {number} dotSpacing - Space between pagination dots. Defaults to 5.
 * @param {number} dotHeight - Height of each pagination dot. Defaults to 10.
 * @param {number} dotWidth - Width of each pagination dot. Defaults to 10.
 * @param {string} dotColor - Color of the active and inactive dots. Defaults to "#000".
 * @param {number} inactiveDotOpacity - Opacity of inactive dots. Defaults to 0.3.
 * @param {number} paginationPosition - vertical position of the pagination as a percentage. Defaults to 15.
 * @param {object} dotContainerStyle - Custom style for the dot container.
 * @param {object} dotStyle - Custom style for each dot.
 * @param {boolean} enablePagination - Flag to enable or disable pagination dots. Defaults to true.
 * @param {object} props - Additional props to pass to the ScrollView.
 *
 * @returns {JSX.Element} Swiper component with children and pagination.
 */
export default Swiper = forwardRef(
  (
    {
      children,
      dotSpacing = 5,
      dotHeight = 10,
      dotWidth = 10,
      dotColor = "#000",
      inactiveDotOpacity = 0.3,
      paginationPosition = 15,
      dotContainerStyle = {},
      dotStyle = {},
      enablePagination = true,
      onIndexChange,
      ...props
    },
    ref,
  ) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const scrollX = useRef(new Animated.Value(0)).current;
    const scrollViewRef = useRef(null);
    const totalSlides = useMemo(() => Children.count(children), [children]);

    useImperativeHandle(ref, () => ({
      next: () => {
        if (currentSlide < totalSlides - 1) {
          const nextSlideOffset = (currentSlide + 1) * screenWidth;
          scrollViewRef.current.scrollTo({
            x: nextSlideOffset,
            y: 0,
            animated: true,
          });
        }
      },
    }));

    // Handle the scroll event to update the active slide.
    const handleScroll = (event) => {
      if (totalSlides <= 1) return;
      const scrollPosition = event.nativeEvent.contentOffset.x;
      const newSlide = Math.round(scrollPosition / screenWidth);

      if (newSlide !== currentSlide) {
        setCurrentSlide(newSlide);
        if (onIndexChange) onIndexChange(newSlide);
      }
    };

    return (
      <View style={{ flex: 1, position: "relative" }}>
        <Animated.ScrollView
          ref={scrollViewRef}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { x: scrollX } } }],
            { useNativeDriver: false, listener: handleScroll },
          )}
          scrollEventThrottle={16}
          {...props}
        >
          {children}
        </Animated.ScrollView>

        {totalSlides > 1 && enablePagination && (
          <View
            style={[
              {
                position: "absolute",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                bottom: `${paginationPosition}%`,
                left: 0,
                right: 0,
                gap: dotSpacing,
              },
              dotContainerStyle,
            ]}
          >
            {Array.from({ length: totalSlides }).map((_, index) => {
              const opacity = scrollX.interpolate({
                inputRange: [
                  (index - 1) * screenWidth,
                  index * screenWidth,
                  (index + 1) * screenWidth,
                ],
                outputRange: [inactiveDotOpacity, 1, inactiveDotOpacity],
                extrapolate: "clamp",
              });

              return (
                <Animated.View
                  key={index}
                  style={[
                    {
                      opacity,
                      height: dotHeight,
                      width: dotWidth,
                      borderRadius: dotWidth / 2,
                      backgroundColor: dotColor,
                    },
                    dotStyle,
                  ]}
                />
              );
            })}
          </View>
        )}
      </View>
    );
  },
);
