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
var Clases;
(function (Clases) {
    var Persona = /** @class */ (function () {
        function Persona(nombre, apellido, dni, sexo) {
            this._apellido = apellido;
            this._dni = dni;
            this._nombre = nombre;
            this._sexo = sexo;
        }
        Persona.prototype.GetApelldio = function () {
            return this._apellido;
        };
        Persona.prototype.GetDni = function () {
            return this._dni;
        };
        Persona.prototype.GetNombre = function () {
            return this._nombre;
        };
        Persona.prototype.GetSexo = function () {
            return this._sexo;
        };
        Persona.prototype.ToString = function () {
            return this._apellido + "-" + this._nombre + "-" + this._dni + "-" + this._sexo;
        };
        return Persona;
    }());
    Clases.Persona = Persona;
})(Clases || (Clases = {}));
/// <reference path="./persona.ts" />
var Clases;
(function (Clases) {
    var Empleado = /** @class */ (function (_super) {
        __extends(Empleado, _super);
        function Empleado(nombre, apellido, dni, sexo, legajo, sueldo) {
            var _this = _super.call(this, nombre, apellido, dni, sexo) || this;
            _this._legajo = legajo;
            _this._sueldo = sueldo;
            return _this;
        }
        Empleado.prototype.GetLegajo = function () {
            return this._legajo;
        };
        Empleado.prototype.GetSueldo = function () {
            return this._sueldo;
        };
        Empleado.prototype.Hablar = function (idioma) {
            if (idioma === void 0) { idioma = "Español"; }
            return "El empleado habla el idioma " + idioma;
        };
        Empleado.prototype.ToString = function () {
            return _super.prototype.ToString + "-" + this._legajo + "-" + this._sueldo;
        };
        return Empleado;
    }(Clases.Persona));
    Clases.Empleado = Empleado;
})(Clases || (Clases = {}));
/// <reference path="./empleado.ts" />
var persona1 = new Clases.Empleado("Raul", "Gomez", 16000000, "M", 1, 35000);
function Mostrar(p) {
    console.log(p.ToString());
}
Mostrar(persona1);
