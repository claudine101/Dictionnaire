import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto"  />
      <View style={{flexDirection: 'row',justifyContent: 'space-between',
                    alignItems: 'center',marginTop:"10%",backgroundColor: '#777',height:50}}>
          <View style={{marginHoriaontal:"200", weidth:100, flexDirection: 'row',justifyContent: 'space-between'}}>
              <FontAwesome5 name="bars" size={24} color="white" style={{left:10}} />
              <Text style={{alignItems:"center",color:"white",fontSize: 16,
                    fontWeight: 'bold',left:30,fontSize:20}} >Dictionnaire  Francais</Text>
          </View>
          <FontAwesome name="search" size={24} color="white" style={{left:-30}}/>
          
      </View>
      <View style={{flexDirection: 'row',justifyContent: 'space-between',
                    alignItems: 'center',
                    alignContent: 'center',marginTop:"0%",backgroundColor: '#87CEEB',height:50}}>
          <View style={{weidth:100,backgroundColor: '#87CEEB', flexDirection: 'row',justifyContent: 'space-between'}}>
                <AntDesign name="forward" size={24} color="white"   style={{left:10}} />
                <Text style={{color:"white",left:30}}>Venir</Text>
          </View>
          <View style={{flexDirection: 'row',}}>
          <AntDesign name="caretright" size={24} color="white"  style={{left:-50}}/>
          <AntDesign name="star" size={24} color="white"  style={{left:-20}} />
          </View>
      </View>
      <ScrollView>
      <View style={{flexDirection: 'row',marginTop:10}}>
          <Text style={{left:10,fontWeight: 'bold'}}>Etymologie</Text>
          <AntDesign name="caretdown" size={20} color="blue" style={{left:10}}/>
          <Text  style={{color:"blue",left:10,fontWeight: 'bold'}}>derouler</Text>
      </View>
      <View style={styles.ligne}></View>
      {/* VERBE */}
      <View>
      <View style={{marginTop:10,marginBottom:20}}>
          <Text style={{left:10,fontWeight: 'bold'}}>Verbe</Text>
      </View>
      <View style={{marginTop:10,marginBottom:20,marginHorizontal:10}}>
          <Text style={{left:10}} ><Text style={{left:10,fontWeight: 'bold'}}>Parler     </Text>
          \pa@b.le\transitif inditect ou intransitif ou pronomial 
          transitif inditect ou intransitif ou pronomial 
          transitif inditect ou intransitif ou pronomial  
          transitif inditect ou intransitif ou pronomial 
          </Text>

      </View>
      <View style={{marginTop:10,marginBottom:20,marginHorizontal:20}}>
          <Text style={{left:10}} >
            1.Modifier (qqch.) progressivement en enlevant certaines de ses parties, en altérant son aspect, par un usage prolongé.
            <AntDesign name="caretdown" size={20} color="blue" style={{left:10}}/> <Text  style={{color:"blue",left:10,fontWeight: 'bold'}}>derouler</Text>
          </Text>
          <Text style={{left:10}} >
            2.Modifier (qqch.) progressivement en enlevant certaines de ses parties, en altérant son aspect, par un usage prolongé.
            <AntDesign name="caretdown" size={20} color="blue" style={{left:10}}/> <Text  style={{color:"blue",left:10,fontWeight: 'bold'}}>derouler</Text>
          </Text>
          <Text style={{left:10}} >
            3.Modifier (qqch.) progressivement en enlevant certaines de ses parties, en altérant son aspect, par un usage prolongé.
            <AntDesign name="caretdown" size={20} color="blue" style={{left:10}}/> <Text  style={{color:"blue",left:10,fontWeight: 'bold'}}>derouler</Text>
          </Text>
          <Text style={{left:10}} >
            4.Modifier (qqch.) progressivement en enlevant certaines de ses parties, en altérant son aspect, par un usage prolongé.
            <AntDesign name="caretdown" size={20} color="blue" style={{left:10}}/> <Text  style={{color:"blue",left:10,fontWeight: 'bold'}}>derouler</Text>
          </Text>
           <Text style={{left:10}} >
            5.Modifier (qqch.) progressivement en enlevant certaines de ses parties, en altérant son aspect, par un usage prolongé.
            <AntDesign name="caretdown" size={20} color="blue" style={{left:10}}/> <Text  style={{color:"blue",left:10,fontWeight: 'bold'}}>derouler</Text>
          </Text>
      </View>
      </View>
      <View style={styles.ligne}></View>
      {/* VERBE */}
      <View>
      <View style={{marginTop:10,marginBottom:5,marginHorizontal:10}}>
          <Text style={{left:10}} ><Text style={{left:10,fontWeight: 'bold'}}>traductions  </Text>(Proférer,prenoncer,articuler des mots)  <AntDesign name="caretdown" size={20} color="blue" style={{left:10}}/> <Text  style={{color:"blue",left:10,fontWeight: 'bold'}}>derouler</Text>  </Text>
      
      </View>
      <View style={{marginTop:0,marginBottom:20,marginHorizontal:60}}>
          <Text><Text style={{fontWeight: 'bold'}}>.</Text>allemand:<Text style={{color:"blue"}}>sprechen</Text></Text>
          <Text><Text style={{fontWeight: 'bold'}}>.</Text>allemand:<Text style={{color:"blue"}}>sprechen</Text></Text>
          <Text><Text style={{fontWeight: 'bold'}}>.</Text>allemand:<Text style={{color:"blue"}}>sprechen</Text></Text>
          <Text><Text style={{fontWeight: 'bold'}}>.</Text>allemand:<Text style={{color:"blue"}}>sprechen</Text></Text>
          <Text><Text style={{fontWeight: 'bold'}}>.</Text>allemand:<Text style={{color:"blue"}}>sprechen</Text></Text>
          <Text><Text style={{fontWeight: 'bold'}}>.</Text>allemand:<Text style={{color:"blue"}}>sprechen</Text></Text>
          
      </View>
      </View>

      <View style={styles.ligne}></View>
      {/* NOM */}
      <View>
      <View style={{marginTop:10,marginBottom:20}}>
          <Text style={{left:10,fontWeight: 'bold'}}>Nom</Text>
      </View>
         <View style={{marginTop:10,marginBottom:5,marginHorizontal:10}}>
          <Text style={{left:10}} >orthographe <AntDesign name="caretdown" size={20} color="blue" style={{left:10}}/> <Text  style={{color:"blue",left:10,fontWeight: 'bold'}}>derouler</Text>  </Text>
          </View>
          <View style={{marginTop:10,marginBottom:5,marginHorizontal:10}}>
          <Text style={{left:10}} ><Text style={{left:10,fontWeight: 'bold'}}>parler  </Text>\pa@b.le\ masculin  </Text>
          <View style={{marginTop:10,marginBottom:5,marginHorizontal:10}}>
          <Text style={{left:10}} >
           1.Modifier (qqch.) progressivement en enlevant certaines de ses parties, en altérant son aspect, par un usage prolongé.
            <AntDesign name="caretdown" size={20} color="blue" style={{left:10}}/> <Text  style={{color:"blue",left:10,fontWeight: 'bold'}}>derouler</Text>
          </Text>
          </View>
      </View>
      </View>
      <View style={styles.ligne}></View>
      {/* VERBE */}
      <View>
      <View style={{marginTop:10,marginBottom:5,marginHorizontal:10}}>
      <Text style={{left:10,fontWeight: 'bold'}}>Synonymes </Text>

      </View>
      <View style={{marginTop:0,marginBottom:20,marginHorizontal:60}}>
          <Text style={{color:"blue"}}>sprechen</Text>
          <Text style={{color:"blue"}}>sprechen</Text>
          <Text style={{color:"blue"}}>sprechen</Text>
          <Text style={{color:"blue"}}>sprechen</Text>
          <Text style={{color:"blue"}}>sprechen</Text>
          <Text style={{color:"blue"}}>sprechen</Text>
          
      </View>
      </View>
      <View style={styles.ligne}></View>
      <Text >Ce texte est extrait du <Text style={{color:"blue"}}> Wikitionnaire</Text> et il est  disponible sous licence<Text style={{color:"blue"}}> CC BY-SA 3.0</Text></Text>

      </ScrollView>
      <View style={{flexDirection: 'row',justifyContent: 'center',
                    alignItems: 'center',
                    alignContent: 'center',marginTop:"0%",backgroundColor: 'blue',height:50}}>

          <MaterialCommunityIcons name="shuffle" size={30} color="white"  />
          <AntDesign name="sharealt" size={30} color="white" style={{left:10}} />
          <MaterialCommunityIcons name="view-dashboard-edit-outline" size={30} color="white" style={{left:20}} />

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
  ligne: {
    borderTopWidth: 1,
    marginTop: 10,
    borderTopColor: 'blue',
    marginHorizontal:10
  },
});
