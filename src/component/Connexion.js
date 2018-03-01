import React, { Component } from 'react';
import '../styles/Connexion.css';

class Connexion extends Component {
    
    gotoPendu(event) {
		event.preventDefault();
		const pseudo = this.PseudoInput.value;
        this.props.history.push(`pseudo/${pseudo}`);
	}

    render() {
      return (
        <div className="container">
        <form onSubmit={e => this.gotoPendu(e)}>
            <div className="field">
            <label className="label">Pseudo</label>
                <div className="control has-icons-left">
                    <input 
                    className="input is-info input-pseudo" 
                    type="text" 
                    placeholder="Saisir pseudo"
                    required
                    ref={input => { this.PseudoInput = input}}
                    />
                    <span className="icon is-small is-left"><i className="fas fa-user"></i></span>
                </div>
            </div>
            <div className="field">
                <div className="control">
                    <input className="button is-link" type="submit" value="Valider" />
                </div>
           </div>       
        </form>
        </div>
      );
    }
  }


  export default Connexion;
  