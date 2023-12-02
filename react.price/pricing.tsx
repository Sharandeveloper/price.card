
import plancard from './plancard';

export default function pricing  () {
    return{
        <div classname= "flex flex-col  items-center bg-black p-4">

        <div classname= "mb-2 mt-12 text-center">
        <h1 classname= "mb-4 text-7xl font-black text-white">printing</h1>
        <p classname= "text-lg text-white">choose the right pricing for you and get started working on you
        </p>
        </div>
        <div classname = "flex flex-col gap-8 p-10 xl:flex-row">
        <plancard
        color= "#78E3FC"
        name= "basic"
        description = "get started with the basic plan"
        features = {['1 user', '2 project', '5GB storage']}
        btntext="start free plan"
          />
        <plancard
        color= "#FCD638"
        name= "pro"
        description = "get more advantage"
        features = {['3 user', '5 project', '10GB storage', 'custom']}
        btntext="start pro trial"
        />
        <plancard
        color= "#FFB5BA"     
           name= "business"
        description = "for big business "
        features = {['unlimited user', 'unlimited project', '100GB storage', 'custom domain', 'analytic tools']}
        btntext="start business plan"
        />
        </div>

        </div>
    };
};

