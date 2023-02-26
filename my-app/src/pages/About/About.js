import React from 'react';
import photo from '../../assets/images/about.jpg';

import './style.scss';

function About() {

    return (
        <>
            <div className="title-others">
                <h1 className="title-others-text">Une vie de découvertes</h1>
            </div>

            <div className='about'>
                <img src={photo} alt="Celine C." className="about-picture"/>
                <div className="about-resume">
                    <h2 className="about-resume-h2">A propos</h2>
                    
                    <p><span className="about-resume-span-bold"> Mon monde s’écroule après le diagnostic : « Madame, vous faites un burn out ! »
                    </span></p>
                    <p>En 2017 je suis directrice de 2 crèches. J’ai très mal au dos, même couchée ! Je prends rdv chez le médecin. Mon idée est « il me prescrit des anti douleurs pour que je puisse travailler ».  Mais il m’arrête 15 jours !</p>
        
                        <p>J’ai honte d’être en arrêt, je stresse beaucoup et mes pensées tournent en boucle :
                            <br/>
                            Comment font-ils pour gérer sans moi ? (je ne suis pourtant pas prétentieuse)
                            <br/>
                            Quelle crédibilité vais-je avoir auprès des équipes, du patron et des parents ?
                        </p>
                        
                        <p>Je commence les séances de kiné. Après plusieurs séances, j’arrive à me coucher sans douleur et à me reposer, ça y est je guéris !
                        </p>
                        
                        <p>Mais un matin, mon téléphone sonne. Sur mon écran est écrit « crèche H…». Mon corps se contracte, mon dos se verrouille à nouveau, une crise d’angoisse arrive.
                            <br/>
                            Je suis en colère de voir que le travail avec le kiné vole en éclat. Je ne supporte plus ce corps trop douloureux et j’en veux à la terre entière ! En moi c’est un tsunami d’émotions et je suis incapable de prendre du recul ! Le médecin m’arrête à nouveau et le diagnostic tombe : Madame, vous faites un burn out !
                        </p>
                        
                        <p>D’abord je quitte mon travail.
                            <br/>
                            Je continue les séances de kiné et je dors beaucoup.
                            <br/>
                            Puis je déménage dans un village où je prends le temps de me reconstruire progressivement.
                        </p>
                        <p>En parallèle de ce burn out, j’ai une gêne entre les côtes et la hanche droite depuis 3 ans. Je fais une écho, une radio, une prise de sang. Les examens sont parfaits donc le médecin en conclut « C’est dans votre tête Madame Collet ! »
                            <br/>
                            Cette remarque me percute, me choque ! Ce n’est pas parce qu’il ne voit rien, que je n’ai rien ! Alors si le médecin ne peut pas m’aider, je vais trouver un moyen d’aller mieux.
                        </p>
                        <p>Je découvre la naturopathie et je prends rdv avec une naturopathe. La consultation dure 1h30 ; elle me pose des questions que personne ne m’avait posé avant.
                            <br/>
                            Je rentre chez moi avec plein de conseils et commence à les appliquer. La gêne disparait en 15 jours !
                            <br/>
                            Je suis stupéfaite, 3 ans que je traine cette gêne et en agissant sur mon hygiène de vie, cela va mieux ?!
                            <br/>
                            Mon corps me parle depuis longtemps en m’envoyant des signaux, des alertes que j’ai ignorées ! Je comprends à cet instant l’importance d’écouter mon corps !
                        </p>
                        
                        <p>Ma mission nait et je réponds à ma question quotidienne : qu’est ce que je vais faire de ma vie maintenant ?  
                            <br/>
                            Être naturopathe afin de mettre en lumière la puissance de chaque corps et vous expliquer comment il fonctionne selon vous, individuellement, afin que vous soyez ACTRICE et ACTEUR de votre santé !
                        </p>
                        <p>Aujourd’hui je passe le plus de temps possible dans la nature entre balades et rando, ski, vélo, et j’aime passer du temps avec mes chats.
                        Je suis heureuse d’être alignée avec ma mission et de voir l’amélioration de la santé des personnes que j’accompagne !
                        </p>
                </div>
            </div>
        </>
    )
}

export default React.memo(About);