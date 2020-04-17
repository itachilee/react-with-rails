import React from "react";
import { hot } from "react-hot-loader";
import { Typography,Slider } from "antd";
const { Paragraph } = Typography;

class RailsTitle extends React.Component {
      state = {
        rows: 1,
      };
      onChange = rows => {
        this.setState({ rows });
      };
      render() {
        const { rows } = this.state;
        const article =
          "To be, or not to be, that is a question: Whether it is nobler in the mind to suffer. The slings and arrows of outrageous fortune Or to take arms against a sea of troubles, And by opposing end them? To die: to sleep; No more; and by a sleep to say we end The heart-ache and the thousand natural shocks That flesh is heir to, 'tis a consummation Devoutly to be wish'd. To die, to sleep To sleep- perchance to dream: ay, there's the rub! For in that sleep of death what dreams may come When we have shuffled off this mortal coil, Must give us pause. There 's the respect That makes calamity of so long life而这些并不是完全重要，更加重要的问题是， 一天掉多少根头发，到底应该如何实现。 吕凯特曾经说过，生命不可能有两次，但许多人连一次也不善于度过。这不禁令我深思。 可是，即使是这样，一天掉多少根头发的出现仍然代表了一定的意义。 这样看来， 杰纳勒尔·乔治·S·巴顿说过一句富有哲理的话，接受挑战，就可以享受胜利的喜悦。带着这句话，我们还要更加慎重的审视这个问题： 叔本华说过一句富有哲理的话，普通人只想到如何度过时间，有才能的人设法利用时间。带着这句话，我们还要更加慎重的审视这个问题： 既然如此， 要想清楚，一天掉多少根头发，到底是一种怎么样的存在。 对我个人而言，一天掉多少根头发不仅仅是一个重大的事件，还可能会改变我的人生。 所谓一天掉多少根头发，关键是一天掉多少根头发需要如何写。 贝多芬在不经意间这样说过，卓越的人一大优点是：在不利与艰难的遭遇里百折不饶。这似乎解答了我的疑惑。 既然如何， 一天掉多少根头发，发生了会如何，不发生又会如何。 既然如此， 既然如此， 一般来说， 笛卡儿说过一句富有哲理的话，阅读一切好书如同和过去最杰出的人谈话。这似乎解答了我的疑惑。 一天掉多少根头发因何而发生？ 从这个角度来看， 一天掉多少根头发，发生了会如何，不发生又会如何。 笛卡儿曾经说过，阅读一切好书如同和过去最杰出的人谈话。这启发了我， 我们都知道，只要有意义，那么就必须慎重考虑。";
        return (
          <div>
            <Slider value={rows} min={1} max={10} onChange={this.onChange} />
            <Paragraph
              ellipsis={{
                rows,
                expandable: true,
                suffix: '--William Shakespeare',
              }}
              title={`${article}--William Shakespeare`}
            >
              {article}
            </Paragraph>
          </div>
        );
      }
}


export default hot(module)(RailsTitle);