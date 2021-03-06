import React, { Component } from 'react';
import { connect } from 'react-redux';
import BarPlayMurottal from '../components/BarPlayMurottal/BarPlayMurottal';
import ButtonBack from '../components/ButtonBack/ButtonBack';
import ControlsPlayMurottal from '../components/ControlsPlayMurottal/ControlsPlayMurottal';
import ThumbPlayMurottal from '../components/ThumbPlayMurottal/ThumbPlayMurottal';

class PlayMurottal extends Component {
  render() {
    const { imgQari, qariName, playingMurottal } = this.props;
    let url = playingMurottal.audio_url;
    let audio = new Audio(url);

    return (
      <div className="play-murottal">
        <ButtonBack position="button-back-playMurottal" name="Qari" />
        <ThumbPlayMurottal image={imgQari} qariName={qariName} />
        <BarPlayMurottal qariName={qariName} surahName={playingMurottal.name} />
        <ControlsPlayMurottal murottal={playingMurottal} qariName={qariName} audio={audio} image={imgQari} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps)(PlayMurottal);
