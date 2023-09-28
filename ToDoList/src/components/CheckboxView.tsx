import React, { useState } from "react"
import {TouchableOpacity, StyleSheet} from "react-native"

interface CheckboxProps {
    checked: boolean;
    onToggle: () => void;
}

const CheckboxView: React.FC<CheckboxProps> = ({ checked, onToggle }) => {

    const [isChecked, setIsChecked] = useState(checked)

    const toggleCheckbox = () => {
        setIsChecked(!isChecked)
        onToggle();
        
    }

    return(
        <TouchableOpacity 
            onPress={toggleCheckbox}
            style={styles[isChecked ? 'checkboxTrue' : 'checkboxFalse']}
        ></TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    checkboxFalse: {
        backgroundColor: 'lightgray',
        width: 30,
        height: 30,
        borderRadius: 5,
    },
    checkboxTrue: {
        backgroundColor: 'gray',
        width: 30,
        height: 30,
        borderRadius: 5,
    }
    
})
export default CheckboxView