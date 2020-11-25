import React, { useEffect } from 'react';

// Equivalents to (roughly) class lifecycle methods

// The whole method is sort of a render() method
export default function LifecycleFunctional() {
  useEffect(() => {
    // This runs once, at mounting, like componentDidMount
  }, []); // <-- Why it runs once (empty array of dependencies)

  useEffect(() => {
    // This runs every time the function is called
    // Somewhat like componentDidUpdate
  }); // <-- NO DEPENDENCIES

  useEffect(() => {
    // Runs only when the variable foo is updated.
    // No analogue in the class lifecycle
    // Kind of componentDidUpdate() { if (foo != previous foo) ... }
  }, [foo]); // <-- Dependency on the variable foo changing

  useEffect(() => {
    return () => {
      // This returned function will execute when the component is destroyed
      // Similar to componentWillUnmount
    };
  }); // <-- have some dependencies, empty dependencies, or no dependencies

  return (
    <div>
      <h2>Lifecycle in a functional component (ish)</h2>
    </div>
  );
}
