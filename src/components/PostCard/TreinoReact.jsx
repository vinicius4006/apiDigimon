import { useEffect, useState, useCallback } from "react";

import { loadDigimons } from "../../utils/load-digimons";
import { Button } from "../Button";
import { PostsDigi } from "../PostsDigi";
import { TextInput } from "../TextInput";

export const TreinoReact = () => {
 

  const [digiList, setDigiList] = useState([]);
  const [allDigi, setAllDigi] = useState([]);
  const [page, setPage] = useState(0);
  const [digiPerPage] = useState(18);
  const [searchValue, setSearchValue] = useState("");

  const notMoreDigi = page + digiPerPage >= allDigi.length;
  

  const filteredDigis = !!searchValue
    ? allDigi.filter((digimon) => {
        return digimon.name.toLowerCase().includes(searchValue.toLowerCase());
      })
    : digiList;


  const handleLoadDigi = useCallback (async (page, digiPerPage) => {
    const digiJson = await loadDigimons();

    setDigiList(digiJson.slice(page, digiPerPage));
    setAllDigi(digiJson);
  }, [])

  useEffect(() => {
    handleLoadDigi(0, digiPerPage);
  }, [handleLoadDigi, digiPerPage])

  const loadMoreDigi = () => {
    const nextPage = page + digiPerPage;
    const nextDigis = allDigi.slice(nextPage, nextPage + digiPerPage);
    digiList.push(...nextDigis);

    setDigiList(digiList);
    setPage(nextPage);
  };

  const loadDecreaseDigi = () => {
    const prevPage = page + digiPerPage;
    
    //const prevDigis = allDigi.slice(0, prevPage - digiPerPage);
    const prevDigis = digiList.splice(0, prevPage - digiPerPage);
    
    setDigiList(prevDigis);
    setPage(page - digiPerPage);
  };

  const handleChange = (e) => {
    const { value } = e.target;

    setSearchValue(value);
  };

  return (
    <section className="digiContainer min-h-screen max-w-7xl m-auto p-7 flex flex-col justify-center items-center">
      <div className="search-container mb-8">
        <TextInput handleChange={handleChange} searchValue={searchValue} />
        <br /> <br />
      </div>

      {filteredDigis.length > 0 && <PostsDigi digiList={filteredDigis} />}
      {filteredDigis.length === 0 && (
        <p>Não há digimons com esse nome no nosso banco de dados!!!</p>
      )}

      {!searchValue && (
        <div className="flex justify-around w-full">
        <Button 
        loadMoreDigi={loadMoreDigi} 
        notMoreDigi={notMoreDigi}
        text={"LOAD MORE +"}
        />

        <Button 
        loadMoreDigi={loadDecreaseDigi}
        notMoreDigi={page <= 0}
        text={"REDUCE -"}
        />
       
        </div>
        
      )}
    </section>
  );
};

// export default class TreinoReact2 extends Component {
//   state = { // Estado Global
//     digiList: [],
//     allDigi: [],
//     page: 0,
//     digiPerPage: 18,
//     searchValue: '',
//   };
//   //   https://pokeapi.co/api/v2/pokemon?limit=100&offset=200
//   async componentDidMount() {
//    await this.loadDigimons();
//   }

//   loadDigimons = async () => {
//     const { page, digiPerPage } = this.state;
//     const digiJson = await loadDigimons();
//     this.setState({
//       digiList: digiJson.slice(page, digiPerPage),
//       allDigi: digiJson,
//     });
//   };

//   loadMoreDigi = () => {
//     const {
//       page,
//       digiPerPage,
//       allDigi,
//       digiList

//     } = this.state;
//     const nextPage = page + digiPerPage;
//     const nextDigis = allDigi.slice(nextPage, nextPage + digiPerPage);
//     digiList.push(...nextDigis);

//     this.setState({digiList, page: nextPage});

//   }

//   handleChange = (e) => {
// const { value } = e.target;
// this.setState({ searchValue: value })
//   }

//   render() {
//     const { digiList, page, digiPerPage, allDigi, searchValue } = this.state;
// const notMoreDigi = page + digiPerPage >= allDigi.length;

// const filteredDigis = !!searchValue ?

// allDigi.filter(digimon => {
//   return digimon.name.toLowerCase().includes(
//     searchValue.toLowerCase()
//     );
// })
// :
// digiList;

//     return (
//       <section className="digiContainer min-h-screen max-w-7xl m-auto p-7 flex flex-col justify-center items-center">
//       <div className="search-container mb-8">
// <TextInput handleChange={this.handleChange} searchValue={searchValue}/>
//         <br /> <br />

//       </div>

//         {filteredDigis.length > 0 && (
//           <PostsDigi digiList={filteredDigis}/>
//         )}
//         {filteredDigis.length === 0 && (
//           <p>Não há digimons com esse nome no nosso banco de dados!!!</p>
//         )}

//         {!searchValue && (
//            <button className={`btn btn-transition mt-12 hover:bg-white
//         hover:text-black transition-all
//         ease-in duration-300 ${notMoreDigi ? 'cursor-not-allowed hover:bg-gray-400 hover:text-red-400': ''}`} onClick={this.loadMoreDigi} disabled={notMoreDigi}>LOAD MORE</button>

//         )}
//        </section>
//     );
//   }
// }
