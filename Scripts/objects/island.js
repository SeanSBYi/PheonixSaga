var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var objects;
(function (objects) {
    var Island = /** @class */ (function (_super) {
        __extends(Island, _super);
        // PRIVATE INSTANCE VARIABLES
        // PUBLIC PROPERTIES
        // CONSTRUCTORS
        function Island(assetManager) {
            var _this = _super.call(this, assetManager, "island") || this;
            _this.Start();
            return _this;
        }
        // PRIVATE METHODS
        Island.prototype._reset = function () {
            this.y = -this.height;
            this.x = (Math.random() * (640 - this.width)) + this.halfWidth;
        };
        Island.prototype._checkBounds = function () {
            if (this.y >= 480 + this.height) {
                this._reset();
            }
        };
        // PUBLIC METHODS
        Island.prototype.Start = function () {
            this.verticalSpeed = 5;
            this._reset();
        };
        Island.prototype._updatePosition = function () {
            this.y += this.verticalSpeed;
            this.position.x = this.x;
            this.position.y = this.y;
        };
        Island.prototype.Update = function () {
            this._updatePosition();
            this._checkBounds();
        };
        return Island;
    }(objects.GameObject));
    objects.Island = Island;
})(objects || (objects = {}));
//# sourceMappingURL=island.js.map