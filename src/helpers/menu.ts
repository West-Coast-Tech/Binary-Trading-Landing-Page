import {
	HORIZONTAL_MENU_ITEMS,
	MENU_ITEMS,
	MenuItemTypes,
} from '../constants/menu'

const getMenuItems = () => {
	// NOTE - You can fetch from server and return here as well
	return MENU_ITEMS
}
const getHorizontalMenuItems = () => {
	// NOTE - You can fetch from server and return here as well
	return HORIZONTAL_MENU_ITEMS
}

const findAllParent = (
	menuItems: MenuItemTypes[],
	menuItem: MenuItemTypes
): string[] => {
	let parents: string[] = []
	const parent = findMenuItem(menuItems, menuItem.parentKey)

	if (parent) {
		parents.push(parent.key)
		if (parent.parentKey) {
			parents = [...parents, ...findAllParent(menuItems, parent)]
		}
	}
	return parents
}


export const getMenuItemFromURL = (items: MenuItemTypes | MenuItemTypes[], url: string): MenuItemTypes|undefined => {
	if(items instanceof Array){
		for (const item of items){
			const foundItem = getMenuItemFromURL(item, url);	
			if(foundItem){
				return foundItem;
			}
		}
	}else{
		if(items.url == url)
			return items;		
		if(items.children!=null){
			for (const item of items.children) {
				if(item.url == url)
					return item;
			}
		}
	}
}


const findMenuItem = (
	menuItems: MenuItemTypes[] | undefined,
	menuItemKey: MenuItemTypes['key'] | undefined
): MenuItemTypes | null => {
	if (menuItems && menuItemKey) {
		for (let i = 0; i < menuItems.length; i++) {
			if (menuItems[i].key === menuItemKey) {
				return menuItems[i]
			}
			const found = findMenuItem(menuItems[i].children, menuItemKey)
			if (found) return found
		}
	}
	return null
}

export { getHorizontalMenuItems, findAllParent, findMenuItem, getMenuItems }
