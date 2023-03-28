import { createRef } from "react";
import { NavigationContainerRef } from "@react-navigation/native";

export const mainNavigationRef = createRef();

export function navigate(
	name,
	param,
) {
	mainNavigationRef.current?.navigate(name, param);
}