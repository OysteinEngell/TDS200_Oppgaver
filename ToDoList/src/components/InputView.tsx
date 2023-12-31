import React, { useState } from "react";
import { TextInput, StyleSheet, NativeSyntheticEvent, TextInputChangeEventData  } from "react-native";

interface inputViewProps {
    typeOfValue: 'default' | 'numeric'
    placeholder: string
    textChange: (text: string) => void 
}


const InputView: React.FC<inputViewProps> = ({ typeOfValue, placeholder, textChange}) => {

    const [inputValue, setInputValue] = useState<string>("")
    
    const handleChange = (event: NativeSyntheticEvent<TextInputChangeEventData>) => {
        setInputValue(event.nativeEvent.text)
        textChange && textChange(inputValue)
    }

    return(
        <TextInput
            style={styles.field}
            value={inputValue}
            keyboardType={typeOfValue}
            placeholder={placeholder}
            onChange={handleChange}
        />
    )
}

const styles = StyleSheet.create({
    field: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10
    }
})

export default InputView