import { createContext, useContext } from 'react';

const frogs = [
    { id: 'frog-m', name: 'Lemmy Frogmister', 
        image: require('../assets/images/frogs/metal_frog.jpg'), 
        wisdom: 'If you’re gonna croak, croak loud.',
        reason: 'Because don’t waste your time whispering in the swamp when you could be screaming on the stage. Be loud. Be real. Be unapologetically you.' },
    { id: 'frog-w', name: 'Franz Frogmeier', 
        image: require('../assets/images/frogs/wiesn_frog.jpg'), 
        wisdom: 'Wisdom comes after the third beer, but before the sixth.',
        reason: 'Because there’s a sweet spot between genius and gibberish — try to live there.' },
    { id: 'frog-s', name: 'Harry Frogtter', 
        image: require('../assets/images/frogs/student_frog.jpg'), 
        wisdom: 'Sometimes you have to leap before the spell is finished.',
        reason: 'Because bravery isn’t about knowing the outcome — it’s about jumping anyway.' },
  ];

const FrogContext = createContext({
  frogs,
  getFrogById: (id: string) => frogs.find((f) => f.id === id),
});

export const useFrogs = () => useContext(FrogContext);

export function FrogProvider({ children }: { children: React.ReactNode }) {
  return (
    <FrogContext.Provider
      value={useContext(FrogContext)}
    >
      {children}
    </FrogContext.Provider>
  );
}
