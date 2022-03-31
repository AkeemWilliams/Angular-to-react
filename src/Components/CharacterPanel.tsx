
import ProgressBar from '../Components/ProgressBar';
import { Character } from '../Types/CharacterTypes';
import { Mounts } from '../Types/MountTypes';
import { Minions } from '../Types/MinionTypes';

export function CharacterPanel({userData}:any){
    const mountCompletion = Math.round(userData.character.mounts.length/userData.mounts.count * 100) | 0;
    const minionCompletion = Math.round(userData.character.minions.length/userData.minions.count * 100) | 0;
    const achievementCompletion = Math.round(userData.character.achievements.length/2739 * 100) | 0;

    return(

    <section className="char-section">
        {userData ? (
               <div className="character-sheet">
               <section className="char-name">
                   <div>{userData.character.name}</div>
                   <div>Server: {userData.character.worldName}</div>
               </section>
               <section className="character-proper">
                   <div className="char-portrait">
                       <img src={userData.character.imageUrl} alt="Character Portrait" />
                   </div>
               </section>
               <section className="user-progression">
                   <h2>Collections</h2>
                   <div className="achievements-proper">
                       <h3>Achievements - {achievementCompletion}%</h3>
                       <ProgressBar value={achievementCompletion}/>
                       <span>{(!userData.character.achievements ? 0 : userData.character.achievements.length)} of {2739} Collected </span>
                   </div>
                   <div className="mounts-proper">
                       <h3>Mounts - {mountCompletion}%</h3>
                       <ProgressBar value={mountCompletion}/>
                       <span>{(!userData.character.mounts ? 0 : userData.character.mounts.length)} of {(userData.mounts ?? []).count} Collected </span>
                   </div>
                   <div className="minions-proper">
                       <h3>Minions - {minionCompletion}%</h3>
                        <ProgressBar value={minionCompletion}/>
                       <span>{(!userData.character.minions ? 0 : userData.character.minions.length)} of {(userData.minions ?? []).count} Collected </span>
                   </div>
               </section>

           </div>
        ) : (
        <div></div>
        )}

    </section>
    
    
    );
    }