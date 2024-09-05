import InputGroup, {InputSize} from "./components/input-group/InputGroup";
import {ChangeEvent, useState} from "react";
import SearchIcon from "./components/icons/SearchIcon";

const App = () => {
	const [inputValue, setInputValue] = useState<string>('');
	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		setInputValue(e.target.value)
	}
	
	return (
		<div style={{width: '100%', padding: '50px'}}>
			<InputGroup
				label={'Cool label'}
				required={true}
				placeholder={'Enter text..'}
				size={InputSize.EXTRA_LARGE}
				iconBefore={<SearchIcon/>}
				iconAfter={<SearchIcon/>}
				value={inputValue}
				onChange={handleChange}
				showError={true}
				infoText={'Text'}
				helpText={'Skocndfj vuh uhfduhijsi8u88j8 er8 fje'}

			/>
			<h1>{inputValue}</h1>
		</div>
	);
};

export default App;