import React, { Component } from 'react';
import {Parallax, Collapsible, CollapsibleItem, Row, Col,
        Modal, Button} from 'react-materialize'
import './universe.css';
import roshar from './images/Map_roshar.jpg'
import UniverseItem from './UniverseItem';
class Universe extends Component {
    state = {
        regions: {
            "Alethkar": {
                name: "Alethkar",
                history: "Alethkar was founded as Alethela in the Silver Kingdoms Epoch. It survived the Desolations, but at an unknown point was fractured into the Princedoms.For centuries, Alethkar was divided into ten self-governed Princedoms until King Gavilar Kholin conquered and united them. He was crowned first king since Sunmaker, who cast down the Hierocracy. When King Gavilar was assassinated by the Parshendi in 1167, his son, Elhokar, became King and declared war on the Parshendi.",
                lore: "The Alethi are native to Alethkar. They possess tan skin and pure black hair. They are a grand people with a natural nobility to them.[1] They follow the Vorin religion and are famous for their military heritage.The men are tall and well made. Lighteyes men dress in dark coats that are elaborately embroidered, looking like generals on a field.Further information: Vorin Havah Lighteyes women are even more splendid. They wear grand dresses, their bright colors a contrast to the dark tones favored by the men. The left sleeve of each dress is longer than the right, covering the left hand. For women of age, this is their safehand and it is to be covered at all times. Common darkeyed women wear a glove instead of the safepouch lighteyes women wear.Women wear their hair pinned atop their heads, either in intricate braids or in loose piles. It is often woven with ribbons or ornaments, along with gems that glow with Stormlight. The Alethi class system is based on their eye color. Lighteyes are the noble, ruling class and darkeyes are the peasant, worker class. The lighteyes are ranked by dahn and the darkeyes are further ranked by nahn. Amongst the Alethi, writing is a feminine art; men learn only glyphs, leaving letters and reading to their wives and sisters.",
                cites: ["Kholinar", "Rathalas", "Dumadari", "Varikev", "Mourn's Vault", "Hearthstone", "Shulin", "Karanak", "Revolar", "Farcoast", "Tomat", "Dalilak", "Relanas", "Davinar",
                "Kelathar", "Danidan", "Savalashi", "Shamel", "Darkhill", "Rashir"],
                princedoms: ["Aladar", "Bethab", "Hatham", "Kholin", "Roion", "Ruthar","Sadeas" ,"Sebarial","Thanadal","Vamah"],
                img: "https://vignette.wikia.nocookie.net/stormlightarchive/images/0/08/Roshar_-_Alethkar.jpg/revision/latest/scale-to-width-down/1000?cb=20121114033233"

            },
            "Jah Keved": {
                name: "Jah Keved",
                history: "Jah Keved is one of the five Vorin kingdoms, west of Alethkar. Its capital is Vedenar. During the Heraldic Epochs, the region was part of the former kingdom Valhav. Jah Keved, along with Alethkar, is said to possess the most Shardblades (around 20 each). They are also the only known nation to possess the Half shard, a fabrial-powered shield capable of deflecting a Shardblade.[1][2][3]",
                lore: "Jah Keved is one of the largest kingdoms on Roshar. It is situated in the eastern half of the continent, west of Alethkar, additionally bordering Herdaz, Tu Bayla and Triax. The Reshi and Tarat seas hold it to the north and south. It has two centrally located mountain ranges: the Horneater Peaks - home to the Unkalaki (Horneaters) - and Bavland, a small mining region.",
                cites: ["Kholinar", "Rathalas", "Dumadari", "Varikev", "Mourn's Vault", "Hearthstone", "Shulin", "Karanak", "Revolar", "Farcoast", "Tomat", "Dalilak", "Relanas", "Davinar",
                "Kelathar", "Danidan", "Savalashi", "Shamel", "Darkhill", "Rashir"],
                img: "https://vignette.wikia.nocookie.net/stormlightarchive/images/0/08/Roshar_-_Alethkar.jpg/revision/latest/scale-to-width-down/1000?cb=20121114033233"
            }
        }
        
    }

    setCurrentRegion(region) {
        console.log(region);
        this.setState({ current: region }, () => { console.log(this) });
    }

    render() {

        let countryKey = Object.keys(this.state.regions)
        countryKey.forEach(key => {
            var region = this.state.regions[key];
          });
        return (
            <div>
            <div className="roshar">
             <h1>Roshar</h1>
             <img className='rosharPic' src='https://i2.wp.com/img2.wikia.nocookie.net/__cb20130609204511/stormlightarchive/images/3/34/Map_roshar.jpg'/>
             </div>
             <Row>
                <Col>
                    <div className='majorNations'>
                    {
                        countryKey.map(key => (
                            <UniverseItem 
                            key={key}
                            countryKey={key}
                            region={this.state.regions[key]}/>
                        ))
                  
                  }
                </div>
                </Col>
            </Row>
            <h1>Lesser Nations</h1>
             <Row>
                 <Col s={4}>
             <Collapsible popout defaultActiveKey={1}>
	            <CollapsibleItem header='First' icon='filter_drama'>
		Lorem ipsum dolor sit amet.
	            </CollapsibleItem>
	        <CollapsibleItem header='Second' icon='place'>
		Lorem ipsum dolor sit amet.
	        </CollapsibleItem>
	        <CollapsibleItem header='Third' icon='whatshot'>
		Lorem ipsum dolor sit amet.
	        </CollapsibleItem>
            </Collapsible>
            </Col>
            <Col s={4}>
             <Collapsible popout defaultActiveKey={1}>
	            <CollapsibleItem header='First' icon='filter_drama'>
		Lorem ipsum dolor sit amet.
	            </CollapsibleItem>
	        <CollapsibleItem header='Second' icon='place'>
		Lorem ipsum dolor sit amet.
	        </CollapsibleItem>
	        <CollapsibleItem header='Third' icon='whatshot'>
		Lorem ipsum dolor sit amet.
	        </CollapsibleItem>
            </Collapsible>
            </Col>
            <Col s={4}>
             <Collapsible popout defaultActiveKey={1}>
	            <CollapsibleItem header='First' icon='filter_drama'>
		Lorem ipsum dolor sit amet.
	            </CollapsibleItem>
	        <CollapsibleItem header='Second' icon='place'>
		Lorem ipsum dolor sit amet.
	        </CollapsibleItem>
	        <CollapsibleItem header='Third' icon='whatshot'>
		Lorem ipsum dolor sit amet.
	        </CollapsibleItem>
            </Collapsible>
            </Col>
            </Row>

            </div>
        );
    }
}

export default Universe;