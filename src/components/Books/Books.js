import React, { Component } from 'react';
import {Card, CardTitle, Button, Modal} from 'react-materialize'
import './book.css';
class Characters extends Component {
    render() {
        return (
            <div className="bookContainer">
                <Card className='small'
	                header={<CardTitle image='https://pgcxc3h3hw71bk31w2urosg4-wpengine.netdna-ssl.com/wp-content/gallery/stormlight-1-art-gallery/00_wok_us.png'>Way of Kings</CardTitle>}
	                actions={[<Modal
                        header='Way of Kings'
                        trigger={<Button>Way of Kings</Button>}>
                        <p>The book begins with a victory. We look at the life of the Heralds, the leaders of the Knights Radiant. For thousands of years, the Heralds have waged war against a race of monsters, called Voidbringers, in order to protect humanity. The Voidbringers always appear in a regular cycle, called Desolations, during which the Heralds battle against them.

This plight is told from the viewpoint of a male Herald. He reveals that all the Heralds are cursed to ultimately perish in battle driving back the monsters. After dying, they are sent to a place of fire and brimstone where they suffer greatly, only to eventually be reborn and start the cycle of war and death again. After countless rebirths, and weary of the tortuous cycle, the Heralds abandon and condemn one of their own to remain eternally in that place of fire, cast down their Honorblades (swords similar to but more powerful than Shardblades), and abandon their calling, disappearing into history. Leaderless, the Knights Radiant seemingly gradually die off or are consumed by corruption until the order ceases to exist. The only remnants of their order are their Shardblades and Shardplate.

Thousands of years later, the story switches from the Heralds' point of view to that of Kaladin, Shallan, Dalinar Kholin, Szeth, and many others, who lead seemingly unconnected lives. Szeth, a "Truthless" (a Shin man cast out by his people and condemned to do the bidding of whoever holds his Oathstone, except the taking of his own life or giving up his Blade), is sent to murder Gavilar Kholin, King of one of Roshar's most powerful nations, Alethkar, whose people are called Alethi.

A peace-loving believer in non-violence, Szeth cries as he's forced to do the bidding of his unknown master. As the story progresses, he continuously changes hands, doing his best to hide the fact that he possesses a Shardblade, a magical blade given to the Knights Radiant that can cut through any material and end lives with a single cut. He also possesses an ability called Surgebinding (the ability to control gravity and to bind things together for a certain amount of time), once possessed by the Knights Radiant and thought lost, making him incredibly difficult to defeat in battle.

When Szeth was sent to kill the Alethi King, the Parshendi, a race similar to the docile servants of other nations, Parshmen, take credit for the murder. Alethkar then initiates the War of Reckoning with the then-before-unheard-of Parshendi for vengeance. Most eastern nations on Roshar seek and relish war, and have developed a religion around it known as Vorinism. The religion also worships the Heralds as angels and a being called the Almighty as their god. The story then shifts to the stories of Highprince Dalinar Kholin, the brother of the King who was murdered. Before he died, his murderer scrawled a message onto the ground in Gavilar's blood, directing Dalinar to an ancient tome called The Way of Kings.[1] His studies of the book lead Dalinar to start questioning the Alethi way of life. He also begins to experience visions in which he both sees and interacts with the ancient Knights Radiant. These visions not only cast doubt on the mistaken history of the Radiants, they also begin to reveal the truth about the Voidbringers and the current state of the world. All of these events make Dalinar reluctant to do battle, causing other powerful Highprinces to try and eliminate him. He must also contend with his nephew, the son of his dead brother and the new King, who, as time passes, becomes increasingly paranoid. The story is also told from the perspective of his son, Adolin Kholin, as the young man - who possesses a Shardblade like his father - struggles to understand his father's change of heart and his fear that the man he's always respected has gone mad.

Meanwhile, Kaladin, a darkeyed peasant with a burning hatred for lighteyes, is close to despair. Trained in his youth as a surgeon by his father, Kaladin volunteered to go to war for the army of a local lord. He did this to protect his younger brother, who was drafted against his will into the same army. In his third battle, Kaladin fails in protecting his brother, who is killed. This causes Kaladin to reenlist to become a better fighter, hoping to be able to protect others. During a later battle, Kaladin succeeds in killing an enemy Shardbearer, and by right he could claim the enemy's Blade and Plate, thereby becoming a lighteyes himself. However, he rejects both Blade and Plate and is then betrayed by Brightlord Amaram, who takes the artifacts for himself and has Kaladin branded into slavery to hide the theft. This event not only cements Kaladin's hatred for all lighteyes, it also leaves deep emotional scars. Now a slave, he is forced into service as a bridgeman in one of the ten armies battling on the Shattered Plains. Bridgemen struggle to lay large mobile bridges for their cavalry to cross large fissures on the Plains, and are living targets for the opposing Parshendi archers. Beaten down and hopeless, Kaladin manages to rally the other men in his group and turn them into a team that can survive. As time passes, the men start to become more like a family, giving Kaladin a will to live.

However, after he accidentally ruins a raid by teaching his men to use the bridge as a shield, he is beaten half to death and left outside during a highstorm (a death sentence). However, he manages to survive by unconsciously draining Stormlight from the spheres he is holding, which glow with Stormlight. As a result, he discovers that he possesses an ability, though he doesn't know its name or capabilities. As he struggles to find a way for his men to escape their lives as bridgemen, he comes to terms with his powers and begins to learn how to use them.

On the other side of the ocean, Shallan, a minor lighteyes whose family and lands are in danger, hatches a daring plot to switch a broken Soulcaster (a device that allows people to transform objects into other things, such as water to food) with a working one belonging to Jasnah Kholin, a notorious heretic according to those devotees of the Vorin religion. Shallan petitions Jasnah to become her ward, but is initially rejected. Through persistent effort, however, she manages to gain Jasnah's confidence and becomes her ward. However, as she gets to know the woman behind the stern facade, Shallan starts to struggle between what she believes she must do and her growing love for her new life. The situation is further complicated by her inability to use the Soulcaster until one fateful day, when she accidentally turns a goblet into blood. Jasnah comes in at that exact moment, and Shallan breaks a pitcher and cuts herself to make it seem as though the blood was hers, inadvertently making it seem as if she had tried to commit suicide. Shallan soon discovers that Jasnah's Soulcaster does not possess the ability to transmute, but is instead simply a distraction from her uncommon natural ability to Soulcast. When Jasnah learns that Shallan can transmute she forgives the girl for trying to steal her Soulcaster and begins instructing her in its proper use. She also reveals her research into the origins of the Knights Radiant and Voidbringers and prepares Shallan and herself to travel to the Shattered Plains to meet with Jasnah's uncle, Dalinar.</p>
                    </Modal>]}>
	                    This is the first book in the series.
                </Card>
                <Card className='small'
	            header={<CardTitle image='https://i.kinja-img.com/gawker-media/image/upload/s--wwhyNhIR--/c_scale,fl_progressive,q_80,w_800/vga9ipyxnxvmw75rvy9g.jpg'>Words of Radiance</CardTitle>}
	            actions={<Modal
                    header='Words of Radiance'
                    trigger={<Button>Words of Radiance</Button>}>
                    <p>Words of Radiance is the second volume in The Stormlight Archive, an Epic fantasy series by Brandon Sanderson expected to consist of ten volumes. It was released on March 4th, 2014. 

With this volume, the epic continues the story of Kaladin from the first volume, The Way of Kings. However, in this volume, the focal character is Shallan. Interludes from the points of view of Talenelat, Taravangian, Eshonai and Rysn were confirmed by Sanderson prior to the novel's release. Additionally, Interludes from the points of view of Ym and Lift are included.

Initially Sanderson planned that this volume would be named after the tome Shallan is given at the end of the first volume: The Book of Endless Pages. However, the name was changed after the editor commented “Uh, are you sure you want to name a very long, very thick fantasy book The Book of Endless Pages?”

Sanderson said that the book in hardcover would be 1088 pages; the maximum printable size of a book for his publisher, Tor.

“	The Knights Radiant must stand again.
The ancient oaths have at last been spoken; the spren return. Men seek that which was lost. I fear the struggle will destroy them.

It is the nature of the magic. A broken soul has cracks into which something else can be fit.  Surgebindings, the powers of creation themselves.  They can brace a broken soul; but they can also widen its fissures.

The Windrunner, lost in a shattered land, balanced upon the boundary between  vengeance and honor. The Lightweaver, slowly being consumed by her past, searching for the lie that she must become. The Bondsmith, born in blood and death, striving to rebuild what was destroyed. The Explorer, straddling the fates of two peoples, forced to  choose between slow death and a terrible betrayal of all she believes.

It is past time for them to awaken, for the Everstorm looms.

And the Assassin has arrived.

”
From the Cover FlapEdit
The eagerly awaited sequel to the New York Times bestselling The Way of Kings.

Six years ago, the Assassin in White, a hireling of the inscrutable Parshendi, assassinated the Alethi King on the very night a treaty between men and Parshendi was being celebrated. So began the Vengeance Pact among the Highprinces of Alethkar and the War of Reckoning against the Parshendi.

Now the Assassin is active again, murdering rulers all over the world, using his baffling powers to thwart every bodyguard and elude all pursuers. Among his prime targets is Highprince Dalinar, widely considered the power behind the Alethi throne. His leading role in the war would seem reason enough, but the Assassin’s master has much deeper motives.

Expected by his enemies to die the miserable death of a military slave, Kaladin survived to be given command of the royal bodyguards, a controversial first for a low-status darkeyes.  Now he must protect the King and Dalinar from every common peril, as well as the distinctly uncommon threat of the Assassin, all while secretly struggling to master remarkable new powers that are somehow linked to his honorspren, Syl.

Brilliant but troubled Shallan strives along a parallel path. Despite being broken in ways she refuses to acknowledge, she bears a terrible burden: to somehow prevent the return of the legendary Voidbringers and their civilization-ending Desolation. The secrets she needs can be found at the Shattered Plains, but even arriving there proves more difficult than she imagined.

Meanwhile, at the heart of the Shattered Plains, the Parshendi are making an epochal decision. Hard pressed by years of Alethi attacks, their numbers ever shrinking, they are convinced by their war leader, Eshonai, to risk everything on a desperate gamble with the very supernatural forces they once fled. The consequences for both Parshendi and humans alike - indeed, for Roshar itself - are as dangerous as they are incalculable.</p>
                </Modal>}>
	            The Second book in the series
                </Card>
                <Card className='small'
	            header={<CardTitle image='https://i2.wp.com/www.tor.com/wp-content/uploads/2017/03/oathbringer_cover-full_art_final.jpg?type=vertical'>Oathbringer</CardTitle>}
	            actions={<Modal
                    header='Oathbringer'
                    trigger={<Button>Oathbringer</Button>}>
                    <p>With the third entry of Brandon Sanderson’s The Stormlight Archives, Oathbringer, releasing today, the arc that comprises the first five books is more than halfway through. The third book takes nearly all the events that have happened previously and reaches the height of storytelling for the series so far.

From the beginning, Oathbringer is ripe with revelations. The prologue starts off with a reveal that not only impacts the rest of this volume but the events of the previous two books. Then, what is revealed to the reader later in the book puts the prologue in an entirely new light if the reader chooses to read it over again. Afterwards, it picks up right where Words of Radiance left off with Dalinar Kholin and company seeking refuge in the ancient city of Urithiru and the establishment of a new order of Knights Radiant.


The story does not cease in its momentum after those events. With the Everstorm raging and the return of the Voidbringers, the first third of the novel delves into what immediately happens next. The Desolation has begun again but that change is secondary to the changes in our main characters. Kaladin and Dalinar have embraced their new roles and allowed themselves to be happy with them while Adolin and Shallan are dealing with the aftermath of what they have done. Oathbringer balances the battle against the new Desolation with emotional growth in nearly every major protagonist. Character development is interwoven with the plot so well that one cannot help but admire Sanderson’s craftsmanship between moments of being wholly absorbed in the story. However, like the people of Roshar, the reader cannot fully define what the outward conflict is with the intention of the Voidbringers shrouded in mystery. Therefore, inner conflict tends to take a precedent over it. This is a not a criticism in any way as the heroes must grow before they face the enemy.

In fact, some point-of-view chapters such as Shallan’s are improved by it. With the revelations of her past in the second book, Shallan is left emotionally fragile while her powers are flourishing. How does she resolve the revelations about her past? By avoiding it entirely in an unhealthy way. This runs parallel with a murder mystery that is occurring in Urithiru. To solve it, Shallan uses her abilities to travel in circles she normally would not be accepted but she is also using those same abilities to avoid facing reality. She approaches her training with her Shardblade with the same dissociation. Her ability to create illusions helps her with the goals as a Knights Radiant but is also an enabler for avoiding feeling any negative emotions until it comes to a boiling point. This, combined with Shallan’s witty banter, which Sanderson has approved upon immensely since The Way of Kings, gives her some of the most captivating chapters in Oathbringer.  In contrast, Adolin does not shy away from what he has done nor the aftermath helping him to realize who he really is outside of his father’s shadow. However, as far as consequences go for his actions, there isn’t much until the end of the novel and even then it seems insubstantial.

In contrast, Adolin does not shy away from what he has done nor the aftermath helping him to realize who he really is outside of his father’s shadow. However, as far as consequences go for his actions, there isn’t much until the end of the novel and even then it seems insubstantial. Though it does cause a political upheaval that increases tension in Urithiru, it does take a backseat until the climax. However, Adolin’s role is not lessened because of this. If characters such as Shallan are dealing with inner conflict, the Brightlord is taking direct actions against the outer conflicts of the novel.

Everyone’s favorite Windrunner, the one, and only Kaladin Stormblessed bookends the novel with some of the best resolution to a protagonist’s past in any of Sanderson’s novels. He has not completely let go of that darkness within him nor has he quit being too hard himself if he perceives he has let those he cares about down. However, he is finally allowing himself to be happy with who he is as a person. The emotional journey the reader has taken with Kaladin to becoming a Knights Radiant leaves us smiling and laughing when he allows himself to do the same. Therefore, it is through Kaladin’s eyes that the reader is given revelations about the Desolation that changes the conflict from good versus evil to one of the moral conflict of war. Though he lets go of his past, he does not forget it. Kaladin has matured into adulthood and therefore is given new conflicts that bare a heavy weight on his shoulders. What does it mean to protect those who can’t protect themselves and protect those he hates, as long as it is right?

Because the majority of Kaladin’s arc is in the beginning and the end of the novel, this gives other members of Bridge Four time in the spotlight such as Rock and Teft that converges with Kaldin’s arc in the climax. Even Elhokar Kholin, who up to this point has not been an admirable king, gets his time to shine alongside the Radiant. In such a short time, with a mission and confidence from the young king that hasn’t been seen before, the reader’s perception of Elhokar will shift.

Like Kaladin in The Way of Kings and Shallan in Words of Radiance, Dalinar is given the chapters set in his past before the events of the first book. Originally, Szeth, the man known as the Assassin in White, was the character to be given the backstory treatment in the third book but Sanderson later chose Dalinar instead. This clearly was the correct path to for Oathbringer. His past is integral to his arc in the present. If anyone thought for a moment the political intrigue ended when Dalinar was proven correct about the Desolation, the Voidbringers, and the Knights Radiant then they are sadly mistaken. Finished with trying to unite Alethkar in memory of his fallen brother, he is now tasked with uniting all of Roshar to fight the Voidbringers. His past provides the proof of why this task is so daunting and why the rest of the continent is so reluctant to trust him. Because of this, like Kaladin, when and if Dalinar triumphs the reader triumphs with him.

Oathbringer is impressive in what it accomplishes. Many of the questions left unanswered in the first two books about the past of Roshar are answered and establishes questions about its future. The reveals, both grand scale and personal to the characters, are jaw-dropping and have implications that will presumably affect the next seven novels of this series going forward. Sanderson continues on with the themes of classicism, slavery, and the aftermath of war from a new perspective than previous entries while exploring new ones such as addiction, substance abuse, religious heresy, and privilege. Well known for his magic systems and rules, Oathbringer continues the trend of balancing magic that has explicit rules the reader can understand while still giving the reader a sense of awe and wonder. It is unbelievable after the climaxes of The Way of Kings and Words of Radiance that Sanderson would be able to top those but Oathbringer’s turning point is rewarding to the reader of not only this one part of the series but the series as a whole so far.

After this novel, it’s hard to imagine the next two volumes of this first five volume arc or the next seven books of the whole Stormlight Archives failing to meet expectations. These first three books together stand out as Sanderson’s best work. This is where Sanderson lets loose, where secrets of the Cosmere comes together, where his worldbuilding and character development coexist at their best. With a time skip of a year set for the fourth volume, it’ll be exciting to see where this series will go next.

</p>
                </Modal>}>
This is the third book in the series
                </Card>
            </div>
        );
    }
}

export default Characters;