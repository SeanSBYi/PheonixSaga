module objects {
    export class Scene extends createjs.Container {
        // PRIVATE INSTANCE VARIAVLES
        protected _currentScene: number;
        
        // PUBLIC PROPERTIE
        
        // CONSTRUCTORS
        constructor() {
            super();
        }
        // PRIVATE METHODS

        // PUBLIC METHODS
        /**
         * Initialize Components here
         * @memberof Scene
         */
        public Start(): void {
            
        }

        /**
         * Update elemets in the scene
         * @memberof Scene
         */
        public Update(): number {
            return 0;
        }
        
        /**
         * Add elemets in the Main methods
         * @memberof Scene
         */
        public Main(): void {

        }
    }
}