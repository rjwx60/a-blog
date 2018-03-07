// 已启用，数据存放在内存中，模拟服务器存储
// 已弃用(最新)，因为 InMemoryWebApi 的功能是将所有请求都拦截导向内存，从而如果请求外链是无法取得的 

/*
import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService{
	createDb(){
		const blogs = [
			{
				id:1,
				title: "Shared-bike hunters stalk streets after dark",
				text: "By day, Zhao Qi, 23, is an architectural designer in Beijing, but after dark, he is a seasoned hunter in the concrete jungle. Residential areas are his hunting grounds, his smartphone is his weapon, and poorly parked shared bikes are his prey.On finding shared bikes that have been parked arbitrarily or are blocking traffic, Zhao takes a photograph and reports them to the bike-share providers. Then he unlocks the bicycles and moves them to a nearby public parking area.Many Chinese bike-sharing companies have started rewarding hunters with credit and punishing violators with higher fees or bans. Previously, Zhao corrected violations at his own expense.",
				postTime:"2017-11-06 08:33"
			},
			{
				id:2,
				title: "China-US BIT remains possible, say experts",
				text: "Despite US President Donald Trump's lambasting of a variety of trade deals, experts believe that a Bilateral Investment Treaty (BIT) between China and the United States could still be concluded in the coming years.",
				postTime:"2017-11-07 07:17"
			},
			{
				id:3,
				title: "TCM student creates an acupuncture robot",
				text: "A college student in Nanjing, Jiangsu province, has designed a robot that he says can perform acupuncture.",
				postTime:"2017-11-03 07:55"
			},
			{
				id:4,
				title: "Portal opens new chapter for used books",
				text: "Wei Ying, 31, is picky when buying new stuff, but she always buys new clothes with profits gained from selling her old ones. In her college days, she had a collection of secondhand books and DVDs that was the envy of her classmates.",
				postTime:"2017-11-06 08:35"
			},
			{
				id:5,
				title: "Aerial view of China's first offshore wind farm",
				text: "Aerial photo taken on Nov 2, 2017 shows the running wind turbines of Donghai Bridge Offshore Wind Farm in Shanghai. The Donghai Bridge Wind Farm, the first offshore wind farm in China, started operation in June 2010",
				postTime:"2017-11-07 07:28"
			},
			{
				id:6,
				title: "Railways to speed up Singles Day deliveries",
				text:"China's railway department will start a new service to speed up the movement of goods during the upcoming Singles Day online shopping spree, in answer to the growing demand for logistics services.",
				postTime: "2017-11-07 08:10"
			}
		];
		return {blogs};
	}
}
*/