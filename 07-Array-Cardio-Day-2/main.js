
    // ## Array Cardio Day 2

    const people = [
        { name: 'Wes', year: 1988 },
        { name: 'Kait', year: 1986 },
        { name: 'Irv', year: 1970 },
        { name: 'Lux', year: 2015 }
      ];
  
      const comments = [
        { text: 'Love this!', id: 523423 },
        { text: 'Super good', id: 823423 },
        { text: 'You are the best', id: 2039842 },
        { text: 'Ramen is my fav food ever', id: 123523 },
        { text: 'Nice Nice Nice!', id: 542328 }
      ];
  
      // Some and Every Checks
      // Array.prototype.some() // is at least one person 19 or older?
      const now = new Date();
      const year = now.getFullYear();
      // console.log(now.getFullYear())
      const atLeaseOnePersonOlderThan19 = people.some(person => (year - person.year) >= 19);

      console.log({atLeaseOnePersonOlderThan19});
      // Array.prototype.every() // is everyone 19 or older?

      const everyoneOlderThan19 = people.every(person => (year - person.year) >= 19);
      console.log(everyoneOlderThan19);
  
      // Array.prototype.find()
      // Find is like filter, but instead returns just the one you are looking for
      // find the comment with the ID of 823423

      const foundId = comments.find(comment => comment.id === 823423);

      console.log(foundId);
  
      // Array.prototype.findIndex()
      // Find the comment with this ID
      // delete the comment with the ID of 823423

      const indexOfId = comments.findIndex(comment => comment.id === 823423);

      // comments.splice(indexOfId,1); //destructive to comments, deleted comment passed to variable

      //other way is to create a new array using spread

      const newComments = [
        ...comments.slice(0,indexOfId),
        ...comments.slice(indexOfId + 1)
      ]

      console.log(comments);
      console.log(newComments);

  