function getTabBarIcon(routeName: string, isFocused: boolean) {
  if (routeName === "Home") {
    return isFocused ? "home" : "home-outline";
  } else if (routeName === "Settings") {
    return isFocused ? "settings" : "settings-outline";
  }
}

export { getTabBarIcon };
