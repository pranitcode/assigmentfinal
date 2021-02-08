import collapsedata from './collapsedata'
import {Card} from './card'
import './collapse.css'

export const Collapse = () => (

    <div className="collapsecenter">
    
        
    <div className="card-list">
    {collapsedata.map(monster => (
       <Card key={monster.id} monster={monster} />
    ))}
</div>
    
    
    </div>

);