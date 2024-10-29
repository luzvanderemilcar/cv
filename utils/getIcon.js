export default function getIcon(iconStock, iconName) {

  //Remove case and space from input
  let iconNameProcessed = iconName.trim().toLowerCase();
  let iconNameRegExp = new RegExp(iconNameProcessed, "i");
  
  // Search icon inside iconStock
  for (let icon in iconStock) {
    if (iconNameRegExp.test(icon)) return iconStock[icon];
  }
  
  // Default return
  return "";
}