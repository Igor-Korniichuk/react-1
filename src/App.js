import PaintingList from "./components/paintingList"
import Section from "./components/section";
import paintings from './paintings.json';
// export default function App() {
//     // const isOnline = false;
//     return (<div>{paintings.map(painting => (
//         <Painting
//             key={painting.id}
//             url={painting.url}
//             title={painting.title}
//             authorName={painting.author.tag}
//             profileUrl={painting.author.url}
//             price={painting.price}
//             quantity={painting.quantity}
//         />
//     ))}
//         {/* {isOnline && 'Online'}
//         {isOnline ? 'Online' : 'Ofline'} */}
//         {/* <Painting
//         url={paintings[0].url}
//         title={paintings[0].title}
//         authorName={paintings[0].author.tag}
//         profileUrl={paintings[0].author.url}
//         price={paintings[0].price}
//         quantity={paintings[0].quantity}
//         /> */}
//     </div>)
// }

export default function App() {
    return (<div>
        {/* <PaintingList items={paintings} /> */}
        <Section title="Топ недели" />Hello!
        <Section />
    </div>)
}
       