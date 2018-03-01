import React, { Component } from 'react';
import '../styles/Pendu.css';

// const alphabet= ['a','b','c','d','e','f','g','h',
//         'i','j','k','l','m','n','o','p','q','r',
//             's','t','u','v','w','x','y','z'];
const word = ["bonjour", "ordinateur", "chambre", "armoire", "chaussure", "bicyclette", "javascript"];
const secretWord = word[Math.floor(word.length * Math.random())];
console.log(secretWord);

class Pendu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            alphabet: ['a','b','c','d','e','f','g','h',
             'i','j','k','l','m','n','o','p','q','r',
            's','t','u','v','w','x','y','z'],
            nbEssai: 0,
            maxEssai: 7,
            showLetter: [],
            hideL: [],
            goodL: 0
                    };
     }
     
     
    // reset = () => {
    //     this.setState(initialState);
    // }                
    
    checkLetter(e) {
        const id = e.target.dataset.id;
        const letter = e.target.dataset.letter;      
        const items = this.state.showLetter;
        const hideL = this.state.hideL;
        let find = false;
        items[id] = true;    
        this.forceUpdate();
      //  console.log(e.target.dataset);
        
        if (this.state.nbEssai !== this.state.maxEssai) {
            for (const i in secretWord) {

                if (secretWord[i] === letter){
                    find = true;
                    hideL[i] = letter;
                    this.setState(prevState => ({ goodL: prevState.goodL + 1 }));
                }
            }
            
        if (!find) {    
            this.setState(count => ({
                 nbEssai: count.nbEssai + 1
                }));
            }
        } else {
            
        }
    }

    render() {

        const ListAlpha = (props) => {
            const id = props.id;
            const letter = props.value;
            return <button 
                className="button is-primary is-rounded btnAlpha"
                onClick={(e) => this.checkLetter(e)}
                data-id={id}
                data-letter={letter}
                disabled={this.state.showLetter[id]}
            >
            {letter}</button>;
        };

        const BrowseAlphabet = (props) => {
            const listAlpha = this.state.alphabet.map( (letter,index) => 
                <ListAlpha 
                    key={index} 
                    id={index}
                    value={letter}
                />
                    );
            return (
                listAlpha
            );
        };
    


        const HiddenWord = () => {
       
        const wordArray = Array.from(secretWord).map( (letter, index) =>
        <a 
            key={index}
            className="button is-warning is-rounded btnAlpha"
        >
        {this.state.hideL[index]}   
        </a>
        );
        return (
            wordArray
            );
        };
        
        const MsgResult = () => {
            // is-danger
            // is-success
            let resultat = '';
            if (this.state.nbEssai === this.state.maxEssai) {
                resultat = <div className="notification is-danger">
                       Vous avez perdu !
                    </div>;
            }
            else if (this.state.goodL === secretWord.length) {
                resultat = <div className="notification is-success">
                       Vous avez gagné, bravo !
                    </div>;

            } else {
                resultat = `Nombre d'essai restant: ${this.state.nbEssai}/${this.state.maxEssai}`;
            }
            return (
                resultat
            )
        }

      return (
          <div>
             <section className="hero is-bold">
              <div className="hero-header">
                <div className="container">
                  <h1 className="title">
                      Jeu du pendu 
                  </h1>
                  <h2 className="subtitle">
                 Bonjour {this.props.match.params.pseudo} !
                  </h2>
                </div>
              </div>
              <div className="hero-body">
                    <div className="container listAlpha">
                    <BrowseAlphabet />
                    </div>
                    <div className="container hideWord">
                    <HiddenWord />
                    </div>
                    <div className="container ">
                    </div>
              </div>
                    <div className="container">
                        <MsgResult/> 
                    </div>
                    {/* <div className="container">
                        <button onClick={this.reset}>Recommencer</button> 
                    </div> */}
                </section>
                </div>
      );
    }

   
  }

  export default Pendu;
  