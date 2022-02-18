

export function CharacterPanel({userData}:any){
    if(userData){
    console.log(userData, 'userdata');
    }
    return(
    
    <section className="char-section">
        {userData ? (
               <div className="character-sheet">
               <section className="char-name">
                   <div>{userData.name}</div>
                   <div>Server: {userData.server}</div>
               </section>
               <section className="character-proper">
                   <div className="char-portrait">
                       <img src={userData.portrait} alt="Character Portrait" />
                   </div>
               </section>
               <section className="user-progression">
                   <h2>Collections</h2>
                   <div className="achievements-proper">
                       <h3>Achievements - userData.achievementCompletion %</h3>
                       {/* <app-user-progress-bar [value]="userData.achievementCompletion" [bufferValue]="200">
                       </app-user-progress-bar> */}
                       <span>{userData.achievements.count} of {userData.achievements.total} Collected </span>
                   </div>
                   <div className="mounts-proper">
                       <h3>Mounts - userData.mountCompletion %</h3>
                       {/* <app-user-progress-bar [value]="userData.mountCompletion" [bufferValue]="200">
                       </app-user-progress-bar> */}
                       <span>{userData.mounts.count} of {userData.mounts.total} Collected </span>
                   </div>
                   <div className="minions-proper">
                       <h3>Minions - userData.minionCompletion %</h3>
                       {/* <app-user-progress-bar [value]="userData.minionCompletion" [bufferValue]="200">
                       </app-user-progress-bar> */}
                       <span>{userData.minions.count} of {userData.minions.total} Collected </span>
                   </div>
               </section>
       
           </div>
        ) : (
        <div></div>
        )}
     
    </section>
    
    
    );
    }