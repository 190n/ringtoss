# ringtoss

This is a simulator for launching a projectile inside a rotating ring-shaped space habitat. It traces the path of the projectile from a frame of reference that rotates along with the ring, so you can see how the rotation appears to create gravity, even though the projectile travels with constant velocity.

"Launch angle" is measured from the horizon. 0° is launching directly against the rotation of the ring, 90° is straight up (towards the center of the ring), and 180° is launching in the direction of the ring's rotation.

Right now, I think the simulation is incorrect. ¯\\\_(ツ)\_/¯

## Development

Install dependencies: `yarn`

Start development server: `yarn dev`, then go to http://localhost:3000/

Create production build: `yarn build`. The built files are in `dist`.
