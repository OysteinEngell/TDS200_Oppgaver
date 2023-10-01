import React, { useState } from "react"
import {TouchableOpacity, StyleSheet} from "react-native"
import Icon from 'react-native-vector-icons/FontAwesome'

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
        >
            {isChecked && <Icon name='check' color='#fafafa' size={20} />}
        </TouchableOpacity>
        
    )
}

const styles = StyleSheet.create({
    checkboxFalse: {
        borderWidth: 4,
        width: 30,
        height: 30,
        borderRadius: 15,
    },
    checkboxTrue: {
        backgroundColor: 'black',
        width: 30,
        height: 30,
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center'
    }
    
})
export default CheckboxView