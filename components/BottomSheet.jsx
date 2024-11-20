import {
  forwardRef,
  useCallback,
  useEffect,
  useImperativeHandle,
  useRef,
} from "react";
import { StyleSheet } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import BottomSheet, {
  BottomSheetModal,
  BottomSheetBackdrop,
} from "@gorhom/bottom-sheet";

const useBackdrop = (opacaity, bgColor) =>
  useCallback(
    (props) => (
      <BottomSheetBackdrop
        {...props}
        disappearsOnIndex={-1}
        appearsOnIndex={0}
        opacity={opacaity}
        style={[props.style, { backgroundColor: bgColor }]}
      />
    ),
    [opacaity, bgColor],
  );

const CreateBottomSheet = forwardRef(function CreateBottomSheet(
  {
    children,
    snapPoints = ["30%", "50%"],
    backdropOpacity = 0.2,
    backdropBgColor = "#737373",
    backgroundStyle,
    ...props
  },
  ref,
) {
  const insets = useSafeAreaInsets();
  const bottomSheetRef = useRef(null);
  const renderBackdrop = useBackdrop(backdropOpacity, backdropBgColor);

  useImperativeHandle(ref, () => bottomSheetRef.current);

  return (
    <BottomSheet
      ref={bottomSheetRef}
      snapPoints={snapPoints}
      topInset={insets.top}
      backdropComponent={renderBackdrop}
      backgroundStyle={[styles.background, backgroundStyle]}
      {...props}
    >
      {children}
    </BottomSheet>
  );
});

const CreateBottomSheetModal = forwardRef(function CreateBottomSheetModal(
  {
    children,
    snapPoints = ["30%", "50%"],
    backdropOpacity = 0.2,
    backdropBgColor = "#737373",
    autoShow = true,
    backgroundStyle,
    ...props
  },
  ref,
) {
  const insets = useSafeAreaInsets();
  const bottomSheetRef = useRef(null);
  const renderBackdrop = useBackdrop(backdropOpacity, backdropBgColor);

  useEffect(() => {
    autoShow && bottomSheetRef.current?.present();
  }, [autoShow]);

  useImperativeHandle(ref, () => bottomSheetRef.current);

  return (
    <BottomSheetModal
      ref={bottomSheetRef}
      snapPoints={snapPoints}
      topInset={insets.top}
      backdropComponent={renderBackdrop}
      backgroundStyle={[styles.background, backgroundStyle]}
      {...props}
    >
      {children}
    </BottomSheetModal>
  );
});

const styles = StyleSheet.create({
  background: {
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: -4,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
});

export { CreateBottomSheet, CreateBottomSheetModal };
