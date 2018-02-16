import React, { Component } from 'react';
import {Card, CardTitle} from 'react-materialize'
import './book.css';
class Characters extends Component {
    render() {
        return (
            <div className="bookContainer">
                <Card className='small'
	                header={<CardTitle image='https://pgcxc3h3hw71bk31w2urosg4-wpengine.netdna-ssl.com/wp-content/gallery/stormlight-1-art-gallery/00_wok_us.png'>Card Title</CardTitle>}
	                actions={[<a href='#'>This is a Link</a>]}>
	                    I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.
                </Card>
                <Card className='small'
	            header={<CardTitle image='https://i.kinja-img.com/gawker-media/image/upload/s--wwhyNhIR--/c_scale,fl_progressive,q_80,w_800/vga9ipyxnxvmw75rvy9g.jpg'>Card Title</CardTitle>}
	            actions={[<a href='#'>This is a Link</a>]}>
	            I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.
                </Card>
                <Card className='small'
	            header={<CardTitle image='https://i2.wp.com/www.tor.com/wp-content/uploads/2017/03/oathbringer_cover-full_art_final.jpg?type=vertical'>Card Title</CardTitle>}
	            actions={[<a href='#'>This is a Link</a>]}>
	            I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.
                </Card>
            </div>
        );
    }
}

export default Characters;