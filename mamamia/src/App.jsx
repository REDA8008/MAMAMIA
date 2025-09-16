import List from './List.jsx'


function App() {
    const fruits = [{id:1 ,name: "teffaha", calories: 95} ,
                    {id:2 ,name: "limouna", calories: 45} ,
                    {id:3 ,name: "banana", calories:105} ,
                    {id:4 ,name: "ananas", calories:48} ,
                    {id:5 ,name: "dellaha", calories:46}];


    const vegetables = [{id:6 ,name: "khizzou", calories: 35} ,
                        {id:7 ,name: "btata", calories: 69} ,
                        {id:8 ,name: "lkhousse", calories:25} ,
                        {id:9 ,name: "felfla", calories:20} ,
                        {id:10 ,name: "broccoli", calories:34}];

  return(<>
  {fruits.length > 0 && <List items={fruits} category="Fruits"/>    }
  {vegetables.length > 0 && <List items={vegetables} category="Vegetables"/>  }
  
  
  </>
  );
}

export default App;
