import { DropdownMenu } from "./DropdownMenu"
import { SearchInput } from "./SearchInput"
export function FilterSection () {
	return(
		<div className="flex space-x-2 max-w-4xl">
			<SearchInput/>
			<DropdownMenu/>
			<DropdownMenu/>
		</div>
	)
}