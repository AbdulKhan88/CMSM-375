package edu.ben.labs.lab4.lab4.repository;

import edu.ben.labs.lab4.lab4.model.User; // import user model
import org.springframework.data.repository.CrudRepository; // import CRUD repo interface so we can extend and use it
import org.springframework.stereotype.Repository;

/**
 * This interface will allow for use of the CRUD repo
 * The parameters that are passed in are the Model and the data type of the model ID.
 * in this case we are passing in the user model and the user ID is of type long.
 */
@Repository("userRepository")
public interface UserRepository extends CrudRepository<User, Long>  {

   User findByEmail(String email);
   User findByUsername(String email);

}
