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
    var Cloud = /** @class */ (function (_super) {
        __extends(Cloud, _super);
        // PRIVATE INSTANCE VARIABLES
        // PUBLIC PROPERTIES
        // CONSTRUCTORS
        function Cloud(assetManager) {
            var _this = _super.call(this, assetManager, "cloud") || this;
            _this.Start();
            return _this;
        }
        // PRIVATE METHODS
        Cloud.prototype._reset = function () {
            this.y = -this.height;
            this.x = (Math.random() * (640 - this.width)) + this.halfWidth;
            this.verticalSpeed = (Math.random() * 5) + 5;
            this.horizontalSpeed = (Math.random() * 4) - 2;
        };
        Cloud.prototype._checkBounds = function () {
            if (this.y >= 480 + this.height) {
                this._reset();
            }
        };
        // PUBLIC METHODS
        Cloud.prototype.Start = function () {
            this._reset();
        };
        Cloud.prototype._updatePosition = function () {
            this.y += this.verticalSpeed;
            this.x += this.horizontalSpeed;
            this.position.x = this.x;
            this.position.y = this.y;
        };
        Cloud.prototype.Update = function () {
            this._updatePosition();
            this._checkBounds();
        };
        return Cloud;
    }(objects.GameObject));
    objects.Cloud = Cloud;
})(objects || (objects = {}));
//# sourceMappingURL=cloud.js.map