import { Text, View, TextInput, TouchableOpacity, FlatList, Alert } from "react-native";
import { styles } from "./styles";
import { Participant } from "../../componets/Participant";
import { useState } from "react";
import { Plus } from "phosphor-react";

export function Home() {
    const [participants, setParticipants] = useState<string[]>([])
    const [participantsName, setParticipantsName] = useState('')

    function handleParticipantAdd() {
        if (participants.includes(participantsName)) {
            return Alert.alert('Wait', 'This participant has been previously added')
        }

        setParticipants(register => [...register, participantsName])
        setParticipantsName('')

    }

    function handleParticipantDelete(name: string) {

        Alert.alert('Delete', `Want to delete the participant ${name}?`, [
            {
                text: 'Yes',
                onPress: () => setParticipants((register) => register.filter((participant) => participant !== name))
            },
            {
                text: 'No',
                style: "cancel",
            }
        ])

    }

    return (
        <View style={styles.container}>
            <Text style={styles.eventName}>
                Event name
            </Text>
            <Text style={styles.eventDate}>
                Thursday, 22 june 2023
            </Text>

            <View style={styles.form}>
                <TextInput
                    style={styles.input}
                    placeholder="Participant name"
                    placeholderTextColor='#6B6B6B'
                    onChangeText={setParticipantsName}
                    value={participantsName}
                    onSubmitEditing={handleParticipantAdd}
                />

                <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
                    <Text style={styles.buttonText}>
                        +
                    </Text>
                </TouchableOpacity>
            </View>

            <Text style={styles.texts}>
                Participants
            </Text>

            <FlatList
                data={participants}
                keyExtractor={item => item}
                renderItem={({ item }) => (
                    <Participant
                        key={item}
                        name={item}
                        onDelete={() => handleParticipantDelete(item)}
                    />
                )}
                ListEmptyComponent={() => (
                    <Text style={styles.listEmptyText}>
                        Add participants to your attendence list
                    </Text>
                )}
            />



        </View>
    )
}
