import { StyleSheet, Text, ScrollView, View } from "react-native";
import React from "react";
import Post from "../components/HomeScreen/Post";
import tw from "tailwind-react-native-classnames";
import { useRoute } from "@react-navigation/native";
const DetailScreen = () => {
  //   console.log(route.params.id);
  const route = useRoute();
  const item = route.params.item;
  //   console.log(route);
  return (
    <ScrollView>
      <View style={tw`flex-1`}>
        <Post
          img={item.image}
          bed={item.bed}
          bedRoom={item.bedRoom}
          description={item.title}
          oldPrice={item.oldPrice}
          newPrice={item.newPrice}
          total={item.totalPrice}
        />
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
          commodi perspiciatis quidem assumenda maxime voluptas velit,
          necessitatibus excepturi eius fugiat laudantium soluta aliquid est
          deserunt error cupiditate molestias harum dolorem omnis placeat
          reprehenderit nihil culpa! Alias ab unde iste laudantium ea, tempora
          vitae officia hic perferendis? Nihil, quaerat culpa perspiciatis
          repudiandae laboriosam odit labore? Totam quibusdam esse fugit eveniet
          consectetur nesciunt rem veniam quas facere illum quo beatae quaerat,
          asperiores, quasi doloremque, a nisi! Dolores quas incidunt, tenetur
          explicabo et placeat. Facere, fuga tempora incidunt magnam illum ipsam
          exercitationem animi. Quis rerum illum ab, quam deleniti est cum
          tempora eveniet laudantium totam enim, libero perspiciatis blanditiis
          magnam vitae quidem at ipsam numquam ipsum obcaecati et! Officia nisi
          distinctio, quaerat enim voluptatem, architecto cupiditate labore
          placeat quis soluta quia quod obcaecati culpa fugiat sapiente, atque
          rem nesciunt doloribus eveniet iure eligendi possimus ducimus tempore
          veritatis? Ipsa sit accusamus, fugit temporibus assumenda incidunt
          facilis quibusdam ab dicta necessitatibus labore in? Minima
          reprehenderit aut iste. Beatae consequuntur pariatur cum dolorem
          assumenda sit at saepe culpa quo molestias eos quis tempore, accusamus
          earum mollitia animi alias reiciendis temporibus aut. Totam, nemo.
          Debitis, nihil qui dicta modi pariatur minus hic sequi deleniti
          doloribus ipsa itaque voluptas ex optio atque aspernatur. Ducimus unde
          fuga tempore expedita harum doloribus accusantium quas vero molestiae
          dolorem maiores officiis vitae tempora corrupti reprehenderit aliquid
          magnam illum, ex nam veritatis. Cum voluptate sequi autem,
          necessitatibus aut deleniti voluptas amet cupiditate velit distinctio
          sint est. Doloremque, ducimus ullam, debitis sequi odit libero dicta,
          corrupti quasi alias facere iure eligendi laboriosam fugit maxime
          distinctio! Natus enim sequi deleniti quas harum magnam voluptate
          alias ea dignissimos laudantium porro accusamus explicabo veniam,
          aliquam facere qui quia laborum, quisquam, quidem reprehenderit.
          Adipisci, nesciunt? Quaerat, beatae quae dolores voluptates suscipit
          nam laboriosam distinctio quibusdam aliquid a sequi! Fugit aliquid
          cumque earum vitae quas, qui nisi fugiat libero minus, optio
          consequatur ipsam accusamus illum maxime necessitatibus pariatur natus
          tempore. Perspiciatis amet illum corporis adipisci ipsum fugit saepe
          animi nesciunt, officia quasi suscipit. Nihil aliquam saepe facilis
          ut, totam, quod voluptatum fuga a molestias placeat eveniet ducimus
          fugit deleniti maxime voluptates atque repellat omnis vitae, nulla
          sunt praesentium voluptatem soluta voluptate? Iste sit commodi ipsa
          quam deleniti aspernatur voluptates perferendis rerum veritatis,
          magnam tenetur amet laudantium id similique at porro consequuntur
          aliquam nihil quisquam mollitia dolorum, dolore, veniam cumque fugit!
          Distinctio est, magnam iure porro sunt iusto, maxime doloribus minus
          aliquam, quasi esse nesciunt? Unde expedita rem, sapiente quibusdam
          temporibus ullam. Blanditiis voluptates nulla fugit beatae sit totam
          vel magni quisquam, quae saepe quis ad assumenda maxime consequatur,
          at et quod fuga est. Eveniet nulla error eius blanditiis qui illum
          sequi id asperiores maxime, amet placeat aut cupiditate. Distinctio
          deleniti laboriosam suscipit ducimus autem reprehenderit velit sed
          fuga amet doloremque, corporis omnis adipisci esse saepe ratione
          commodi nostrum nisi? Amet, pariatur quidem tenetur ad omnis dolorum
          provident quod non impedit eligendi voluptas qui dignissimos earum
          nemo asperiores fugit ea dolores eum ex harum exercitationem. Culpa
          obcaecati quam placeat possimus?
        </Text>
      </View>
    </ScrollView>
  );
};

export default DetailScreen;

const styles = StyleSheet.create({});
