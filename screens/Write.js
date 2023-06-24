import React, { useState } from "react";
import { styled } from "styled-components/native";
import colors from "../color";
import { Alert } from "react-native";

const View = styled.View`
    flex: 1;
    background-color: ${colors.bgColor};
    padding: 0px 20px;
`
const Title = styled.Text`
    color: ${colors.textColor};
    margin-top: 100px;
    text-align: center;
    font-size: 28px;
    font-weight: 500;
    margin-bottom: 30px;
`
const TextInput = styled.TextInput`
    background-color: white;
    border-radius: 10px;
    padding: 10px 20px;
    font-size: 18px;
`
const Btn = styled.TouchableOpacity`
    width: 100%;
    margin-top: 30px;
    padding: 10px 20px;
    align-items: center;
    background-color: ${colors.btnColor};
    border-radius: 20px;
`
const BtnText = styled.Text`
    color: white;
    font-weight: 500;
`
const Emotions = styled.View`
    flex-direction: row;
    justify-content: space-around;
    margin-bottom: 30px;
`
const Emotion = styled.TouchableOpacity`
    padding: 8px;
    background-color: white;
    elevation:5;
    border-radius: 5px;
    overflow: hidden;
    border-width: ${props => (props.selected ? "2px" : "0px")};
    border-color: rgba(0,0,0,0.5);
    background-color: ${props => (props.selected ? "rgba(0,0,224,0.5)" : "white")};
`
const EmotionText = styled.Text`
    font-size: 24px;
`
const emotions = ["🥰","😊","😡","🥺","🤒","🤑"];
const Write = () => {
    const [selectedEmotion, setEmotion] = useState(null);
    const [feelings, setFeelings] = useState("");
    const onChangeText = (text) => setFeelings(text);

    const onEmotionPress = (face) => setEmotion(face);
    const onSubmit = () => {
        if (feelings === "" || selectedEmotion == null){
            return Alert.alert("Please complete form")
        }
    }
    console.log(feelings, selectedEmotion )
    return (
        <View>
            <Title>How do you feel today?</Title>
            <Emotions>
                {emotions.map((emotion, index)=>(
                    <Emotion 
                        selected={emotion === selectedEmotion}
                        key={index}
                        onPress={() => onEmotionPress(emotion)}
                    >
                            <EmotionText>{emotion}</EmotionText>
                    </Emotion>
                ))}
            </Emotions>
            
            <TextInput 
                returnKeyType="done"
                onChangeText={onChangeText}
                value={feelings} 
                placeholder="Write your feelings.."
            />
            <Btn  onPress={onSubmit}>
                <BtnText>Save</BtnText>
            </Btn>
        </View>
    )
};
export default Write;