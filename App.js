import { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { ActivityIndicator, ScrollView, StyleSheet, Text, TouchableNativeFeedback, TouchableOpacity, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { TouchableWithoutFeedback } from 'react-native';
import fetchApi from './helpers/fetchApi';
import { TextInput } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

export default function App() {
  //fetch des mots
  const [loading, setLoading] = useState(true)
  const [mots, SetMots] = useState([])
  

  const [reachMots, setReachMots] = useState("")
  
  const fetchMots = async () => {
    try {
      setLoading(true)
      const mots = await fetchApi(`/dictionnaire/mots?MOTS=${reachMots}`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      })
      SetMots(mots?.result[0])

    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
}
useEffect(() => {
  fetchMots()
}, [])

  const [deroulerSens, setderoulerSens] = useState(true)
  const [enroulerSens, setEnroulerSens] = useState(false)
  const enroulerSelect = () => {
    setEnroulerSens(true)
    setderoulerSens(false)
  }

  const deroulerSelect = () => {
    setEnroulerSens(false)
    setderoulerSens(true)
  }
  const str = "Tout d'abord, voyons comment transformer des listes en JavaScript. Dans le code suivant, on utilise la méthode map() pour prendre un tableau de nombres"

  const [deroulerSens1, setderoulerSens1] = useState(true)
  const [enroulerSens1, setEnroulerSens1] = useState(false)
  const [search, setSearch] = useState(false)
  const onClickRearch = () => {
    setSearch(true)

  }
  const ClickRearch = () => {
    setSearch(false)

  }
  const reset = () => {
    setReachMots("")

  }
  const enroulerSelect1 = () => {
    setEnroulerSens1(true)
    setderoulerSens1(false)
  }

  const deroulerSelect1 = () => {
    setEnroulerSens1(false)
    setderoulerSens1(true)
  }
  const [deroulerSens2, setderoulerSens2] = useState(true)
  const [enroulerSens2, setEnroulerSens2] = useState(false)
  const enroulerSelect2 = () => {
    setEnroulerSens2(true)
    setderoulerSens2(false)
  }

  const deroulerSelect2 = () => {
    setEnroulerSens2(false)
    setderoulerSens2(true)
  }
  const [deroulerSens3, setderoulerSens3] = useState(true)
  const [enroulerSens3, setEnroulerSens3] = useState(false)
  const enroulerSelect3 = () => {
    setEnroulerSens3(true)
    setderoulerSens3(false)
  }

  const deroulerSelect3 = () => {
    setEnroulerSens3(false)
    setderoulerSens3(true)
  }
  const [deroulerSens4, setderoulerSens4] = useState(true)
  const [enroulerSens4, setEnroulerSens4] = useState(false)
  const enroulerSelect4 = () => {
    setEnroulerSens4(true)
    setderoulerSens4(false)
  }

  const deroulerSelect4 = () => {
    setEnroulerSens4(false)
    setderoulerSens4(true)
  }
  const [deroulerSens5, setderoulerSens5] = useState(true)
  const [enroulerSens5, setEnroulerSens5] = useState(false)
  const enroulerSelect5 = () => {
    setEnroulerSens5(true)
    setderoulerSens5(false)
  }

  const deroulerSelect5 = () => {
    setEnroulerSens5(false)
    setderoulerSens5(true)
  }
  return (
    (loading) ? <ActivityIndicator
    animating
    size={200}
    color='blue'
    style={{ alignSelf: 'center', marginTop: 200 }}
/>:
    
    mots?
    <View style={styles.container}>
      <StatusBar style="auto" />
     
      <View style={{
        flexDirection: 'row', justifyContent: 'space-between',
        alignItems: 'center', marginTop: "10%",  backgroundColor: 'blue', height: 50
      }}>
        {!search?<View style={{ marginHoriaontal: "200", weidth: 100, flexDirection: 'row', justifyContent: 'space-between' }}>
          <FontAwesome5 name="bars" size={24} color="white" style={{ left: 10 }} />
          <Text style={{
            alignItems: "center", color: "white", fontSize: 16,
            fontWeight: 'bold', left: 30, fontSize: 20
          }} >Dictionnaire  Francais</Text>
           <TouchableOpacity style={{ left: 80 }} onPress={() => onClickRearch()}>
          <FontAwesome name="search" size={24} color="white" style={{ left: -10 }} />
        </TouchableOpacity>
        </View>:
        <View style={{ marginHoriaontal: "200", weidth: 100, flexDirection: 'row', justifyContent: 'space-between' }}>
           <TouchableOpacity style={{ left: 10 }} onPress={() => ClickRearch()}>
          <Ionicons name="arrow-back-sharp" size={30} color="white"  />
          </TouchableOpacity>
          <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Ecrivez le mot à rechercher"
               placeholderTextColor = "white"
               autoCapitalize = "none"
              value={reachMots}
               onChangeText={newValue => setReachMots(newValue)}/>
         <TouchableOpacity style={{ left: 80 }} onPress={() => reset()}>
          <MaterialIcons name="cancel" size={30} color="white"  />
          </TouchableOpacity>
         
      </View>
        }
      
       

      </View>
    
      <View style={{
        flexDirection: 'row', justifyContent: 'space-between',
        alignItems: 'center',
        alignContent: 'center', marginTop: "0%", backgroundColor: '#87CEEB', height: 50
      }}>
        <View style={{ weidth: 100, backgroundColor: '#87CEEB', flexDirection: 'row', justifyContent: 'space-between' }}>
          <AntDesign name="forward" size={24} color="white" style={{ left: 10 }} />
          <Text style={{ color: "white", left: 30 }}>{mots?.MOTS}</Text>
        </View>
        <View style={{ flexDirection: 'row', }}>
          <AntDesign name="caretright" size={24} color="white" style={{ left: -50 }} />
          <AntDesign name="star" size={24} color="white" style={{ left: -20 }} />
        </View>
      </View>
      <ScrollView>
        <View style={{ flexDirection: 'row', marginTop: 10 }}>

          <Text style={{ left: 10, fontWeight: 'bold' }}>{mots?.CATEGORIE}</Text>


          {str.length > 100 ? deroulerSens ?
            <TouchableOpacity onPress={() => enroulerSelect()} style={{ flexDirection: 'row' }}>
              <AntDesign name="caretdown" size={15} color="blue" style={{ left: 20, top: 5 }} />
              <Text style={{ color: "blue", left: 20, fontWeight: 'bold' }}>enrouler</Text>
            </TouchableOpacity> :
            <TouchableOpacity style={{ flexDirection: 'row' }} onPress={() => deroulerSelect()}>
              <AntDesign name="caretdown" size={15} color="blue" style={{ left: 20, top: 5 }} />
              <Text style={{ color: "blue", left: 20, fontWeight: 'bold' }}>dérouler</Text>
            </TouchableOpacity> :
            <View style={{ marginTop: 10, marginBottom: 20, marginHorizontal: 10 }}>
              <Text style={{ left: 10 }} >{mots?.CATEGORIE_DETAIL} </Text>
            </View>


          }
        </View>
        {deroulerSens && <View style={{ marginTop: 10, marginBottom: 20, marginHorizontal: 10 }}>
          <Text style={{ left: 10 }} >{mots?.CATEGORIE_DETAIL} </Text>
        </View>}
        <View style={styles.ligne}></View>
        {/* VERBE */}
        <View>
          <View style={{ marginTop: 10, marginBottom: 20 }}>
            <Text style={{ left: 10, fontWeight: 'bold' }}>Verbe</Text>
          </View>
          <View style={{ marginTop: 10, marginBottom: 20, marginHorizontal: 10 }}>
            <Text style={{ left: 10 }} ><Text style={{ left: 10, fontWeight: 'bold' }}> {mots?.MOTS}
            </Text>
              {mots?.VERBE_SENS}
            </Text>

          </View>
          <View style={{ marginTop: 10, marginBottom: 20, marginHorizontal: 20 }}>

            {/* SENS 1 */}
            <Text style={{ left: 10 }} >
              1.{mots?.VERBE_SENS}
              {deroulerSens1 ?
                <TouchableOpacity onPress={() => enroulerSelect1()} style={{ flexDirection: 'row' }}>
                  <AntDesign name="caretup" size={24} color="blue" />
                  <Text style={{ color: "blue", left: 20, fontWeight: 'bold' }}>enrouler</Text>
                </TouchableOpacity> :
                <TouchableOpacity style={{ flexDirection: 'row' }} onPress={() => deroulerSelect1()}>
                  <AntDesign name="caretdown" size={15} color="blue" style={{ left: 10 }} />
                  <Text style={{ color: "blue", left: 20, fontWeight: 'bold' }}>dérouler</Text>
                </TouchableOpacity>
              }
            </Text>
            {deroulerSens1 && <View style={{ marginTop: 10, marginBottom: 20, marginHorizontal: 30 }}>
              <Text style={{ left: 10 }} >{mots?.SENS1_DETAIL} </Text>
            </View>}


            {/* SENS 2 */}
            <Text style={{ left: 10 }} >
              2.{mots?.VERBE_SENS2}
              {deroulerSens2 ?
                <TouchableOpacity onPress={() => enroulerSelect2()} style={{ flexDirection: 'row' }}>
                  <AntDesign name="caretup" size={24} color="blue" />
                  <Text style={{ color: "blue", left: 20, fontWeight: 'bold' }}>enrouler</Text>
                </TouchableOpacity> :
                <TouchableOpacity style={{ flexDirection: 'row' }} onPress={() => deroulerSelect2()}>
                  <AntDesign name="caretdown" size={15} color="blue" style={{ left: 10 }} />
                  <Text style={{ color: "blue", left: 20, fontWeight: 'bold' }}>dérouler</Text>
                </TouchableOpacity>
              }
            </Text>
            {deroulerSens2 && <View style={{ marginTop: 10, marginBottom: 20, marginHorizontal: 30 }}>
              <Text style={{ left: 10 }} >{mots?.SENS2_DETAIL} </Text>
            </View>}


            {/* SENS 3 */}
            <Text style={{ left: 10 }} >
              3.{mots?.VERBE_SENS3}
              {deroulerSens3 ?
                <TouchableOpacity onPress={() => enroulerSelect3()} style={{ flexDirection: 'row' }}>
                  <AntDesign name="caretup" size={24} color="blue" />
                  <Text style={{ color: "blue", left: 20, fontWeight: 'bold' }}>enrouler</Text>
                </TouchableOpacity> :
                <TouchableOpacity style={{ flexDirection: 'row' }} onPress={() => deroulerSelect3()}>
                  <AntDesign name="caretdown" size={15} color="blue" style={{ left: 10 }} />
                  <Text style={{ color: "blue", left: 20, fontWeight: 'bold' }}>dérouler</Text>
                </TouchableOpacity>
              }
            </Text>
            {deroulerSens3 && <View style={{ marginTop: 10, marginBottom: 20, marginHorizontal: 30 }}>
              <Text style={{ left: 10 }} >{mots?.SENS3_DETAIL}  </Text>
            </View>}
            {/* SENS 4 */}
            <Text style={{ left: 10 }} >
              4.{mots?.VERBE_SENS4}
              {deroulerSens4 ?
                <TouchableOpacity onPress={() => enroulerSelect4()} style={{ flexDirection: 'row' }}>
                  <AntDesign name="caretup" size={24} color="blue" />
                  <Text style={{ color: "blue", left: 20, fontWeight: 'bold' }}>enrouler</Text>
                </TouchableOpacity> :
                <TouchableOpacity style={{ flexDirection: 'row' }} onPress={() => deroulerSelect4()}>
                  <AntDesign name="caretdown" size={15} color="blue" style={{ left: 10 }} />
                  <Text style={{ color: "blue", left: 20, fontWeight: 'bold' }}>dérouler</Text>
                </TouchableOpacity>
              }
            </Text>
            {deroulerSens4 && <View style={{ marginTop: 10, marginBottom: 20, marginHorizontal: 30 }}>
              <Text style={{ left: 10 }} >{str} </Text>
            </View>}
            {deroulerSens3 && <View style={{ marginTop: 10, marginBottom: 20, marginHorizontal: 30 }}>
              <Text style={{ left: 10 }} >{mots?.SENS4_DETAIL}   </Text>
            </View>}
            {/* SENS 5 */}
            <Text style={{ left: 10 }} >
              5.{mots?.VERBE_SENS5}
              {deroulerSens5 ?
                <TouchableOpacity onPress={() => enroulerSelect5()} style={{ flexDirection: 'row' }}>
                  <AntDesign name="caretup" size={24} color="blue" />
                  <Text style={{ color: "blue", left: 20, fontWeight: 'bold' }}>enrouler</Text>
                </TouchableOpacity> :
                <TouchableOpacity style={{ flexDirection: 'row' }} onPress={() => deroulerSelect5()}>
                  <AntDesign name="caretdown" size={15} color="blue" style={{ left: 10 }} />
                  <Text style={{ color: "blue", left: 20, fontWeight: 'bold' }}>dérouler</Text>
                </TouchableOpacity>
              }
            </Text>
            {deroulerSens5 && <View style={{ marginTop: 10, marginBottom: 20, marginHorizontal: 30 }}>
              <Text style={{ left: 10 }} >{mots?.SENS5_DETAIL}  </Text>
            </View>}
          </View>
        </View>
        <View style={styles.ligne}></View>
        {/* VERBE */}
        <View>
          <View style={{ marginTop: 10, marginBottom: 5, marginHorizontal: 10 }}>
            <Text style={{ left: 10 }} ><Text style={{ left: 10, fontWeight: 'bold' }}>Synonymes</Text>({mots?.SYNONYME_SENS})  <AntDesign name="caretdown" size={20} color="blue" style={{ left: 10 }} /> <Text style={{ color: "blue", left: 10, fontWeight: 'bold' }}>derouler</Text>  </Text>

          </View>
          <View style={{ marginTop: 0, marginBottom: 20, marginHorizontal: 60 }}>
            <Text><Text style={{ fontWeight: 'bold' }}>.</Text><Text style={{ color: "blue" }}>{mots?.SYNONYME1}</Text></Text>
            <Text><Text style={{ fontWeight: 'bold' }}>.</Text><Text style={{ color: "blue" }}>{mots?.SYNONYME2}</Text></Text>
            <Text><Text style={{ fontWeight: 'bold' }}>.</Text><Text style={{ color: "blue" }}>{mots?.SYNONYME3}</Text></Text>
            <Text><Text style={{ fontWeight: 'bold' }}>.</Text><Text style={{ color: "blue" }}>{mots?.SYNONYME4}</Text></Text>
            <Text><Text style={{ fontWeight: 'bold' }}>.</Text><Text style={{ color: "blue" }}>{mots?.SYNONYME5}</Text></Text>
            <Text><Text style={{ fontWeight: 'bold' }}>.</Text><Text style={{ color: "blue" }}>{mots?.SYNONYME6}</Text></Text>

          </View>
        </View>

        {/*  */}
        <View>
          <View style={{ marginTop: 10, marginBottom: 5, marginHorizontal: 10 }}>
            <Text style={{ left: 10 }} ><Text style={{ left: 10, fontWeight: 'bold' }}>Antonymes  </Text>({mots?.ANTONYME_SENS})  <AntDesign name="caretdown" size={20} color="blue" style={{ left: 10 }} /> <Text style={{ color: "blue", left: 10, fontWeight: 'bold' }}>derouler</Text>  </Text>

          </View>
          <View style={{ marginTop: 0, marginBottom: 20, marginHorizontal: 60 }}>
            <Text><Text style={{ fontWeight: 'bold' }}>.</Text><Text style={{ color: "blue" }}>{mots?.ANTONYME1}</Text></Text>
            <Text><Text style={{ fontWeight: 'bold' }}>.</Text><Text style={{ color: "blue" }}>{mots?.ANTONYME2}</Text></Text>
            <Text><Text style={{ fontWeight: 'bold' }}>.</Text><Text style={{ color: "blue" }}>{mots?.ANTONYME3}</Text></Text>
            <Text><Text style={{ fontWeight: 'bold' }}>.</Text><Text style={{ color: "blue" }}>{mots?.ANTONYME4}</Text></Text>
            <Text><Text style={{ fontWeight: 'bold' }}>.</Text><Text style={{ color: "blue" }}>{mots?.ANTONYME5}</Text></Text>
            <Text><Text style={{ fontWeight: 'bold' }}>.</Text><Text style={{ color: "blue" }}>{mots?.ANTONYME6}</Text></Text>

          </View>
        </View>


        <View style={styles.ligne}></View>
        {/* NOM */}
        <View>
          <View style={{ marginTop: 10, marginBottom: 20 }}>
            <Text style={{ left: 10, fontWeight: 'bold' }}>Nom</Text>
          </View>
          <View style={{ marginTop: 10, marginBottom: 5, marginHorizontal: 10 }}>
            <Text style={{ left: 10 }} >orthographe <AntDesign name="caretdown" size={20} color="blue" style={{ left: 10 }} /> <Text style={{ color: "blue", left: 10, fontWeight: 'bold' }}>derouler</Text>  </Text>
          </View>
          <View style={{ marginTop: 10, marginBottom: 5, marginHorizontal: 10 }}>
            <Text style={{ left: 10 }} ><Text style={{ left: 10, fontWeight: 'bold' }}>{mots?.MOTS}  </Text>{mots?.NOM_SENS} </Text>
            <View style={{ marginTop: 10, marginBottom: 5, marginHorizontal: 10 }}>
              <Text style={{ left: 10 }} >
                1.{mots?.ANTONYME6}
                <AntDesign name="caretdown" size={20} color="blue" style={{ left: 10 }} /> <Text style={{ color: "blue", left: 10, fontWeight: 'bold' }}>derouler</Text>
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.ligne}></View>

        <View style={styles.ligne}></View>
        <Text >Ce texte est extrait du <Text style={{ color: "blue" }}> Wikitionnaire</Text> et il est  disponible sous licence<Text style={{ color: "blue" }}> CC BY-SA 3.0</Text></Text>

      </ScrollView>
      <View style={{
        flexDirection: 'row', justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center', marginTop: "0%", backgroundColor: 'blue', height: 50
      }}>

        <MaterialCommunityIcons name="shuffle" size={30} color="white" />
        <AntDesign name="sharealt" size={30} color="white" style={{ left: 10 }} />
        <MaterialCommunityIcons name="view-dashboard-edit-outline" size={30} color="white" style={{ left: 20 }} />

      </View>


    </View>:
    <View style={styles.container}>
    <StatusBar style="auto" />
   
    <View style={{
      flexDirection: 'row', justifyContent: 'space-between',
      alignItems: 'center', marginTop: "10%",  backgroundColor: 'blue', height: 50
    }}>
      {!search?<View style={{ marginHoriaontal: "200", weidth: 100, flexDirection: 'row', justifyContent: 'space-between' }}>
        <FontAwesome5 name="bars" size={24} color="white" style={{ left: 10 }} />
        <Text style={{
          alignItems: "center", color: "white", fontSize: 16,
          fontWeight: 'bold', left: 30, fontSize: 20
        }} >Dictionnaire  Francais</Text>
         <TouchableOpacity style={{ left: 80 }} onPress={() => onClickRearch()}>
        <FontAwesome name="search" size={24} color="white" style={{ left: -10 }} />
      </TouchableOpacity>
      </View>:
      <View style={{ marginHoriaontal: "200", weidth: 100, flexDirection: 'row', justifyContent: 'space-between' }}>
         <TouchableOpacity style={{ left: 10 }} onPress={() => ClickRearch()}>
        <Ionicons name="arrow-back-sharp" size={30} color="white"  />
        </TouchableOpacity>
        <TextInput style = {styles.input}
             underlineColorAndroid = "transparent"
             placeholder = "Ecrivez le mot à rechercher"
             placeholderTextColor = "white"
             autoCapitalize = "none"
            value={reachMots}
             onChangeText={newValue => setReachMots(newValue)}
             onSubmitEditing={ () => fetchMots() } />
             
             
       <TouchableOpacity style={{ left: 80 }} onPress={() => reset()}>
        <MaterialIcons name="cancel" size={30} color="white"  />
        </TouchableOpacity>
       
    </View>
      }
    
     

    </View>
  
    <View style={{
      flexDirection: 'row', justifyContent: 'space-between',
      alignItems: 'center',
      alignContent: 'center', marginTop: "0%", backgroundColor: '#87CEEB', height: 50
    }}>
      <View style={{ weidth: 100, backgroundColor: '#87CEEB', flexDirection: 'row', justifyContent: 'space-between' }}>
        <AntDesign name="forward" size={24} color="white" style={{ left: 10 }} />
        <Text style={{ color: "white", left: 30 }}>{mots?.MOTS}</Text>
      </View>
      <View style={{ flexDirection: 'row', }}>
        <AntDesign name="caretright" size={24} color="white" style={{ left: -50 }} />
        <AntDesign name="star" size={24} color="white" style={{ left: -20 }} />
      </View>
    </View>
    <ScrollView>
      
      <Text >Mots intriuvable!!!!verifier  l'orthographe</Text>

    </ScrollView>
    <View style={{
      flexDirection: 'row', justifyContent: 'center',
      alignItems: 'center',
      alignContent: 'center', marginTop: "0%", backgroundColor: 'blue', height: 50
    }}>

      <MaterialCommunityIcons name="shuffle" size={30} color="white" />
      <AntDesign name="sharealt" size={30} color="white" style={{ left: 10 }} />
      <MaterialCommunityIcons name="view-dashboard-edit-outline" size={30} color="white" style={{ left: 20 }} />

    </View>


  </View>

  );
 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#87CEEB',

    // alignItems: 'center',
    // justifyContent: 'center',
  },
  input: {
    // margin: 15,
    height: 40,
    left: 50,
    top:-5,
    borderColor: '#7a42f4',
    borderWidth: 0
 },
  ligne: {
    borderTopWidth: 1,
    marginTop: 10,
    borderTopColor: 'blue',
    marginHorizontal: 10
  },
});
